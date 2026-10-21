// Configuración de la landing de captación (/cotiza/) y de /gracias/.
// Cada valor puede sobrescribirse con una variable VITE_* en tu .env (ver .env.example).

const env = import.meta.env;

/** WhatsApp de Jstack.Digital en formato internacional, solo dígitos (sin + ni espacios). */
export const WHATSAPP_NUMBER: string = env.VITE_WHATSAPP_NUMBER || '16469804939';

/** Correo de contacto que se muestra en el footer. */
export const CONTACT_EMAIL: string = env.VITE_CONTACT_EMAIL || 'jstackinfo@gmail.com';

/**
 * ID del Píxel de Meta. Reemplaza el placeholder (o define VITE_META_PIXEL_ID).
 * Mientras siga el placeholder, el píxel no se carga.
 */
export const META_PIXEL_ID: string = env.VITE_META_PIXEL_ID || 'TU_PIXEL_ID';

/** ID de medición de Google Analytics 4 (el mismo del sitio principal). Vacío = desactivado. */
export const GA_MEASUREMENT_ID: string = env.VITE_GA_MEASUREMENT_ID ?? 'G-48V3T3GC6C';

/** Opcional: enlace de Calendly para agendar una llamada desde /gracias/. Vacío = se oculta. */
export const CALENDLY_URL: string = env.VITE_CALENDLY_URL || '';

/**
 * Destinos donde se guardan los leads. Puedes activar uno o ambos:
 * - Webhook (Google Apps Script → Google Sheets + aviso por correo, o Make/Zapier/n8n).
 * - Supabase (inserción directa en una tabla con RLS).
 */
export const LEAD_WEBHOOK_URL: string = env.VITE_LEAD_WEBHOOK_URL || '';
export const SUPABASE_URL: string = (env.VITE_SUPABASE_URL || '').replace(/\/+$/, '');
export const SUPABASE_ANON_KEY: string = env.VITE_SUPABASE_ANON_KEY || '';
export const SUPABASE_TABLE: string = env.VITE_SUPABASE_TABLE || 'leads';

/** Ruta de la página de agradecimiento. */
export const THANKS_PATH = '/gracias/';

/** Clave de sessionStorage con la que /cotiza/ le pasa el lead a /gracias/. */
export const LEAD_STORAGE_KEY = 'jstack:lead';

export function whatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
