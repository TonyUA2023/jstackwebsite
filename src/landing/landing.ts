// Interactividad de /cotiza/: animaciones al hacer scroll, formulario multipaso, WhatsApp y tracking.

import { LEAD_STORAGE_KEY, THANKS_PATH, whatsappUrl } from './config';
import { submitLead, type Lead } from './leads';
import { COUNTRIES, findCountry, flagEmoji, guessCountry, normalizePhone, type Country } from './phone';
import { loadTrackers, onFirstIntent, trackWhatsAppClick } from './tracking';

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)!;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

const pageLoadedAt = Date.now();

/* ------------------------------------------------------------------ */
/* Animaciones al hacer scroll                                         */
/* ------------------------------------------------------------------ */

function initReveal(): void {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Botón flotante y enlaces de WhatsApp                                */
/* ------------------------------------------------------------------ */

function initWhatsApp(): void {
  $$<HTMLAnchorElement>('[data-wa]').forEach((link) => {
    link.href = whatsappUrl(link.dataset.wa!);
    link.addEventListener('click', () => trackWhatsAppClick(link.dataset.waPlacement || 'landing'));
  });

  // El botón flotante se esconde mientras el formulario está en pantalla para no tapar sus botones.
  const floating = document.getElementById('wa-float');
  const formSection = document.getElementById('cotizar');
  if (!floating || !formSection || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(
    ([entry]) => {
      floating.classList.toggle('translate-y-28', entry.isIntersecting);
      floating.classList.toggle('opacity-0', entry.isIntersecting);
      floating.toggleAttribute('inert', entry.isIntersecting);
    },
    { threshold: 0.05 },
  ).observe(formSection);
}

/* ------------------------------------------------------------------ */
/* Formulario multipaso                                                */
/* ------------------------------------------------------------------ */

type Validator = (form: HTMLFormElement) => string;

const STEP_TITLES = ['Tus datos de contacto', 'Sobre tu negocio', 'Tu proyecto'];

function initForm(): void {
  const form = document.getElementById('lead-form') as HTMLFormElement | null;
  if (!form) return;

  const steps = $$<HTMLFieldSetElement>('[data-step]', form);
  const progressBar = $('[data-progress-bar]', form);
  const progressLabel = $('[data-progress-label]', form);
  const progressTitle = $('[data-progress-title]', form);
  const backBtn = $<HTMLButtonElement>('[data-back]', form);
  const nextBtn = $<HTMLButtonElement>('[data-next]', form);
  const nextLabel = $('[data-next-label]', nextBtn);
  const submitError = $('[data-submit-error]', form);
  const countrySelect = $<HTMLSelectElement>('#pais', form);
  const countryFace = $('[data-country-face]', form);
  const phoneInput = $<HTMLInputElement>('#whatsapp', form);
  const planInput = $<HTMLInputElement>('#paquete', form);
  const needSelect = $<HTMLSelectElement>('#necesidad', form);
  let current = 0;
  let country: Country = guessCountry();

  // Selector de código de país
  countrySelect.innerHTML = COUNTRIES.map(
    (c) => `<option value="${c.iso}">${flagEmoji(c.iso)} ${c.name}${c.dial ? ` (+${c.dial})` : ''}</option>`,
  ).join('');
  const syncCountry = () => {
    country = findCountry(countrySelect.value);
    countryFace.textContent = `${flagEmoji(country.iso)} ${country.dial ? `+${country.dial}` : '+'}`;
    phoneInput.placeholder = country.example;
  };
  countrySelect.value = country.iso;
  syncCountry();
  countrySelect.addEventListener('change', () => {
    syncCountry();
    if (phoneInput.getAttribute('aria-invalid') === 'true') validateField('whatsapp');
  });

  const value = (name: string) => {
    const el = form.elements.namedItem(name) as HTMLInputElement | RadioNodeList | null;
    return (el?.value ?? '').trim();
  };

  const validators: Record<string, Validator> = {
    nombre: () => (value('nombre').length >= 2 ? '' : 'Escribe tu nombre.'),
    whatsapp: () => {
      if (!value('whatsapp')) return 'Escribe tu número de WhatsApp.';
      if (normalizePhone(value('whatsapp'), country)) return '';
      return country.dial
        ? `Revisa el número: para ${country.name} debe verse así: ${country.example}.`
        : 'Escribe el número completo con código de país (ej. 34 612 345 678).';
    },
    email: () => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value('email')) ? '' : 'Revisa tu correo (ej. nombre@gmail.com).'),
    negocio: () => (value('negocio').length >= 2 ? '' : 'Escribe el nombre de tu negocio.'),
    rubro: () => (value('rubro') ? '' : 'Elige el rubro de tu negocio.'),
    necesidad: () => (value('necesidad') ? '' : 'Cuéntanos qué necesitas.'),
    presupuesto: () => (value('presupuesto') ? '' : 'Elige un rango aproximado.'),
    inicio: () => (value('inicio') ? '' : 'Elige cuándo quieres empezar.'),
  };

  function validateField(name: string): boolean {
    const message = validators[name](form!);
    const error = $(`[data-error-for="${name}"]`, form!);
    error.textContent = message;
    const control = form!.querySelector<HTMLElement>(`[name="${name}"]:not([type="radio"])`);
    control?.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }

  function validateStep(index: number): boolean {
    const names = [...new Set($$<HTMLInputElement>('[data-validate]', steps[index]).map((el) => el.name))];
    const results = names.map(validateField);
    const firstInvalid = names[results.indexOf(false)];
    if (firstInvalid) form!.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
    return !firstInvalid;
  }

  // Revalida en vivo los campos que ya mostraron error.
  form.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    if (!target.name || !validators[target.name]) return;
    const shownError = $(`[data-error-for="${target.name}"]`, form).textContent;
    if (shownError || target.type === 'radio') validateField(target.name);
  });
  form.addEventListener('focusout', (e) => {
    const target = e.target as HTMLInputElement;
    if (target.type !== 'radio' && target.value && validators[target.name]) validateField(target.name);
  });

  function showStep(index: number, moveFocus = true): void {
    current = index;
    steps.forEach((step, i) => {
      step.hidden = i !== index;
      step.classList.toggle('step-in', i === index);
    });
    progressBar.style.width = `${((index + 1) / steps.length) * 100}%`;
    progressBar.parentElement!.setAttribute('aria-valuenow', String(index + 1));
    progressLabel.textContent = `Paso ${index + 1} de ${steps.length}`;
    progressTitle.textContent = STEP_TITLES[index];
    backBtn.hidden = index === 0;
    nextLabel.textContent = index === steps.length - 1 ? 'Recibir mi propuesta' : 'Siguiente';
    submitError.hidden = true;
    if (!moveFocus) return;
    form!.scrollIntoView({ block: 'start', behavior: 'smooth' });
    const first = steps[index].querySelector<HTMLElement>('input:not([type="radio"]), select');
    (first ?? steps[index].querySelector<HTMLElement>('legend'))?.focus({ preventScroll: true });
  }

  backBtn.addEventListener('click', () => showStep(Math.max(0, current - 1)));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateStep(current)) return;
    if (current < steps.length - 1) {
      showStep(current + 1);
      return;
    }
    await send();
  });

  // Los botones de los paquetes guardan el plan de interés y sugieren qué necesita.
  $$<HTMLAnchorElement>('[data-plan]').forEach((link) =>
    link.addEventListener('click', () => {
      planInput.value = link.dataset.plan!;
      if (!needSelect.value && link.dataset.need) needSelect.value = link.dataset.need;
    }),
  );

  function buildLead(): Lead {
    const params = new URLSearchParams(window.location.search);
    const phone = normalizePhone(value('whatsapp'), country) ?? '';
    return {
      nombre: value('nombre'),
      whatsapp: `+${phone}`,
      whatsapp_link: `https://wa.me/${phone}`,
      email: value('email').toLowerCase(),
      negocio: value('negocio'),
      rubro: value('rubro'),
      necesidad: value('necesidad'),
      presupuesto: value('presupuesto'),
      inicio: value('inicio'),
      paquete: value('paquete'),
      pais: country.name,
      utm_source: params.get('utm_source') ?? '',
      utm_medium: params.get('utm_medium') ?? '',
      utm_campaign: params.get('utm_campaign') ?? '',
      utm_content: params.get('utm_content') ?? '',
      utm_term: params.get('utm_term') ?? '',
      fbclid: params.get('fbclid') ?? '',
      pagina: window.location.origin + window.location.pathname,
      referrer: document.referrer,
      event_id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    };
  }

  function setLoading(loading: boolean): void {
    nextBtn.disabled = loading;
    backBtn.disabled = loading;
    nextBtn.setAttribute('aria-busy', String(loading));
    $('[data-next-icon]', nextBtn).toggleAttribute('hidden', loading);
    $('[data-next-spinner]', nextBtn).toggleAttribute('hidden', !loading);
    nextLabel.textContent = loading ? 'Enviando…' : 'Recibir mi propuesta';
  }

  async function send(): Promise<void> {
    // Antispam: campo trampa lleno o envío imposible para un humano → se descarta sin avisar.
    if (value('website') || Date.now() - pageLoadedAt < 4000) {
      window.location.assign(THANKS_PATH);
      return;
    }

    const lead = buildLead();
    setLoading(true);
    try {
      await submitLead(lead);
    } catch {
      setLoading(false);
      const waText = `Hola Jstack.Digital 👋 Quiero una cotización.\n\nNombre: ${lead.nombre}\nNegocio: ${lead.negocio} (${lead.rubro})\nNecesito: ${lead.necesidad}\nPresupuesto: ${lead.presupuesto}\nQuiero empezar: ${lead.inicio}`;
      $<HTMLAnchorElement>('a', submitError).href = whatsappUrl(waText);
      submitError.hidden = false;
      return;
    }

    try {
      sessionStorage.setItem(
        LEAD_STORAGE_KEY,
        JSON.stringify({
          nombre: lead.nombre,
          negocio: lead.negocio,
          email: lead.email,
          whatsapp: lead.whatsapp,
          rubro: lead.rubro,
          necesidad: lead.necesidad,
          presupuesto: lead.presupuesto,
          event_id: lead.event_id,
        }),
      );
    } catch {
      // Sin sessionStorage /gracias/ muestra el mensaje genérico.
    }
    window.location.assign(THANKS_PATH);
  }

  showStep(0, false);
}

/* ------------------------------------------------------------------ */

initReveal();
initWhatsApp();
initForm();
$('[data-year]').textContent = String(new Date().getFullYear());
onFirstIntent(() => {
  document.documentElement.classList.add('anim');
  loadTrackers();
});
