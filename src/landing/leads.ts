// Envío del lead a los destinos configurados (Google Sheets vía Apps Script y/o Supabase).

import { LEAD_WEBHOOK_URL, SUPABASE_ANON_KEY, SUPABASE_TABLE, SUPABASE_URL } from './config';

/** Las claves coinciden con las columnas de la hoja de Google y de la tabla de Supabase (ver docs/LANDING.md). */
export interface Lead {
  nombre: string;
  whatsapp: string;
  whatsapp_link: string;
  email: string;
  negocio: string;
  rubro: string;
  necesidad: string;
  presupuesto: string;
  inicio: string;
  paquete: string;
  pais: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  pagina: string;
  referrer: string;
  event_id: string;
}

const TIMEOUT_MS = 15000;

function withTimeout<T>(promise: Promise<T>): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => window.setTimeout(() => reject(new Error('Tiempo de espera agotado')), TIMEOUT_MS)),
  ]);
}

function sendToWebhook(lead: Lead): Promise<unknown> {
  // Apps Script no responde a preflight CORS: se envía como text/plain en modo no-cors
  // (la respuesta es opaca; un error de red sí rechaza la promesa).
  return fetch(LEAD_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(lead),
  });
}

async function sendToSupabase(lead: Lead): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
    method: 'POST',
    keepalive: true,
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error(`Supabase respondió ${res.status}: ${await res.text()}`);
}

/** Resuelve si al menos un destino recibió el lead; rechaza si todos fallaron. */
export async function submitLead(lead: Lead): Promise<void> {
  const jobs: Promise<unknown>[] = [];
  if (LEAD_WEBHOOK_URL) jobs.push(withTimeout(sendToWebhook(lead)));
  if (SUPABASE_URL && SUPABASE_ANON_KEY) jobs.push(withTimeout(sendToSupabase(lead)));

  if (jobs.length === 0) {
    console.warn('[leads] No hay destino configurado (VITE_LEAD_WEBHOOK_URL o VITE_SUPABASE_*). Lead:', lead);
    return;
  }

  const results = await Promise.allSettled(jobs);
  results.forEach((r) => r.status === 'rejected' && console.error('[leads]', r.reason));
  if (results.every((r) => r.status === 'rejected')) throw new Error('No se pudo registrar el lead');
}
