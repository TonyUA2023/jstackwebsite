// /gracias/: confirma el envío, dispara el evento Lead una sola vez y ofrece WhatsApp y Calendly.

import { CALENDLY_URL, LEAD_STORAGE_KEY, whatsappUrl } from './config';
import { loadTrackers, trackLead, trackWhatsAppClick } from './tracking';

interface StoredLead {
  nombre?: string;
  negocio?: string;
  email?: string;
  whatsapp?: string;
  rubro?: string;
  necesidad?: string;
  presupuesto?: string;
  event_id?: string;
  tracked?: boolean;
}

function readLead(): StoredLead | null {
  try {
    const raw = sessionStorage.getItem(LEAD_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredLead) : null;
  } catch {
    return null;
  }
}

function saveLead(lead: StoredLead): void {
  try {
    sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(lead));
  } catch {
    // Sin sessionStorage solo se pierde la protección contra el doble conteo al recargar.
  }
}

const lead = readLead();
const firstName = lead?.nombre?.split(/\s+/)[0] ?? '';

// Píxel + GA4 de inmediato (aquí la velocidad ya no compite con la conversión), con coincidencia avanzada.
loadTrackers(
  lead
    ? { em: lead.email?.toLowerCase(), ph: lead.whatsapp?.replace(/\D/g, ''), fn: firstName.toLowerCase() || undefined }
    : undefined,
);

// El Lead se dispara solo si se llega desde el formulario, y una sola vez aunque se recargue la página.
if (lead?.event_id && !lead.tracked) {
  trackLead({ necesidad: lead.necesidad, rubro: lead.rubro, presupuesto: lead.presupuesto }, lead.event_id);
  saveLead({ ...lead, tracked: true });
}

// Personalización
if (lead?.negocio) {
  const message = document.getElementById('thanks-message');
  if (message) {
    message.textContent = `Gracias${firstName ? `, ${firstName}` : ''}. Ya tenemos la información de ${lead.negocio}: un especialista está revisando tu proyecto para enviarte una propuesta a medida por WhatsApp.`;
  }
}

const waText = lead?.negocio
  ? `Hola Jstack.Digital 👋 Soy ${lead.nombre} de ${lead.negocio}. Acabo de solicitar mi cotización y me gustaría avanzar.`
  : 'Hola Jstack.Digital 👋 Acabo de solicitar una cotización para mi negocio y me gustaría avanzar.';

document.querySelectorAll<HTMLAnchorElement>('[data-wa]').forEach((link) => {
  link.href = whatsappUrl(waText);
  link.addEventListener('click', () => trackWhatsAppClick(link.dataset.waPlacement || 'gracias'));
});

// Calendly opcional (se muestra solo si VITE_CALENDLY_URL está configurado)
const agenda = document.getElementById('agenda');
const calendlyFrame = document.getElementById('calendly-frame') as HTMLIFrameElement | null;
if (CALENDLY_URL && agenda && calendlyFrame) {
  const url = new URL(CALENDLY_URL);
  url.searchParams.set('embed_domain', window.location.hostname);
  url.searchParams.set('embed_type', 'Inline');
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('background_color', '0f1629');
  url.searchParams.set('text_color', 'e2e8f0');
  url.searchParams.set('primary_color', '22d3ee');
  if (lead?.nombre) url.searchParams.set('name', lead.nombre);
  if (lead?.email) url.searchParams.set('email', lead.email);
  calendlyFrame.src = url.toString();
  agenda.hidden = false;
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
