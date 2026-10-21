// Códigos de país y validación de números de WhatsApp (celulares) por país.

export interface Country {
  iso: string;
  name: string;
  /** Código de país sin "+". Vacío = "Otro país" (el usuario escribe el número internacional completo). */
  dial: string;
  /** Formato válido del número nacional de celular, sin código de país ni ceros iniciales. */
  pattern: RegExp;
  example: string;
  /** Ajustes propios del país antes de validar (p. ej. el "9" de los celulares de Argentina). */
  normalize?: (digits: string) => string;
}

export const COUNTRIES: Country[] = [
  { iso: 'PE', name: 'Perú', dial: '51', pattern: /^9\d{8}$/, example: '987 654 321' },
  { iso: 'MX', name: 'México', dial: '52', pattern: /^\d{10}$/, example: '55 1234 5678', normalize: (d) => (d.length === 11 && d.startsWith('1') ? d.slice(1) : d) },
  { iso: 'CO', name: 'Colombia', dial: '57', pattern: /^3\d{9}$/, example: '301 234 5678' },
  { iso: 'CL', name: 'Chile', dial: '56', pattern: /^9\d{8}$/, example: '9 1234 5678' },
  { iso: 'AR', name: 'Argentina', dial: '54', pattern: /^9\d{10}$/, example: '11 2345 6789', normalize: (d) => (d.length === 10 ? `9${d}` : d) },
  { iso: 'EC', name: 'Ecuador', dial: '593', pattern: /^9\d{8}$/, example: '99 123 4567' },
  { iso: 'BO', name: 'Bolivia', dial: '591', pattern: /^[67]\d{7}$/, example: '7123 4567' },
  { iso: 'VE', name: 'Venezuela', dial: '58', pattern: /^4\d{9}$/, example: '412 123 4567' },
  { iso: 'UY', name: 'Uruguay', dial: '598', pattern: /^9\d{7}$/, example: '94 123 456' },
  { iso: 'PY', name: 'Paraguay', dial: '595', pattern: /^9\d{8}$/, example: '981 123 456' },
  { iso: 'CR', name: 'Costa Rica', dial: '506', pattern: /^[5-8]\d{7}$/, example: '8312 3456' },
  { iso: 'PA', name: 'Panamá', dial: '507', pattern: /^6\d{7}$/, example: '6123 4567' },
  { iso: 'GT', name: 'Guatemala', dial: '502', pattern: /^[3-5]\d{7}$/, example: '5123 4567' },
  { iso: 'SV', name: 'El Salvador', dial: '503', pattern: /^[67]\d{7}$/, example: '7012 3456' },
  { iso: 'HN', name: 'Honduras', dial: '504', pattern: /^[389]\d{7}$/, example: '9123 4567' },
  { iso: 'NI', name: 'Nicaragua', dial: '505', pattern: /^[578]\d{7}$/, example: '8123 4567' },
  { iso: 'DO', name: 'Rep. Dominicana', dial: '1', pattern: /^8[024]9\d{7}$/, example: '809 123 4567' },
  { iso: 'PR', name: 'Puerto Rico', dial: '1', pattern: /^(787|939)\d{7}$/, example: '787 123 4567' },
  { iso: 'US', name: 'Estados Unidos', dial: '1', pattern: /^[2-9]\d{2}[2-9]\d{6}$/, example: '646 123 4567' },
  { iso: 'ES', name: 'España', dial: '34', pattern: /^[67]\d{8}$/, example: '612 34 56 78' },
  { iso: 'XX', name: 'Otro país', dial: '', pattern: /^[1-9]\d{7,14}$/, example: 'Código de país + número' },
];

const DEFAULT_ISO = 'PE';

/** País por zona horaria del navegador: la mayoría de visitantes no tendrá que tocar el selector. */
const TIMEZONE_TO_ISO: Record<string, string> = {
  'America/Lima': 'PE',
  'America/Bogota': 'CO',
  'America/Santiago': 'CL',
  'America/Guayaquil': 'EC',
  'America/La_Paz': 'BO',
  'America/Caracas': 'VE',
  'America/Montevideo': 'UY',
  'America/Asuncion': 'PY',
  'America/Costa_Rica': 'CR',
  'America/Panama': 'PA',
  'America/Guatemala': 'GT',
  'America/El_Salvador': 'SV',
  'America/Tegucigalpa': 'HN',
  'America/Managua': 'NI',
  'America/Santo_Domingo': 'DO',
  'America/Puerto_Rico': 'PR',
  'Europe/Madrid': 'ES',
  'Atlantic/Canary': 'ES',
};

export function guessCountry(): Country {
  let iso = DEFAULT_ISO;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (TIMEZONE_TO_ISO[tz]) iso = TIMEZONE_TO_ISO[tz];
    else if (tz.startsWith('America/Argentina/') || tz === 'America/Buenos_Aires') iso = 'AR';
    else if (/^America\/(Mexico_City|Monterrey|Merida|Cancun|Chihuahua|Hermosillo|Mazatlan|Tijuana|Matamoros|Bahia_Banderas|Ojinaga|Ciudad_Juarez)$/.test(tz)) iso = 'MX';
    else if (/^America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise)$/.test(tz) || tz.startsWith('America/Indiana/') || tz.startsWith('America/Kentucky/') || tz === 'Pacific/Honolulu') iso = 'US';
  } catch {
    // Intl no disponible: se queda el país por defecto.
  }
  return findCountry(iso);
}

export function findCountry(iso: string): Country {
  return COUNTRIES.find((c) => c.iso === iso) ?? COUNTRIES[0];
}

export function flagEmoji(iso: string): string {
  if (!/^[A-Z]{2}$/.test(iso) || iso === 'XX') return '🌎';
  return String.fromCodePoint(...[...iso].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65));
}

/**
 * Devuelve el número en formato internacional (solo dígitos, p. ej. "51987654321") o null si no es válido.
 * Acepta espacios, guiones, paréntesis, el código de país repetido y ceros iniciales.
 */
export function normalizePhone(raw: string, country: Country): string | null {
  const trimmed = raw.trim();
  let digits = trimmed.replace(/\D/g, '');
  const international = trimmed.startsWith('+') || digits.startsWith('00');
  digits = digits.replace(/^00/, '');

  if (!country.dial) {
    return country.pattern.test(digits) ? digits : null;
  }

  const finish = (national: string) => {
    let d = national.replace(/^0+/, '');
    if (country.normalize) d = country.normalize(d);
    return country.pattern.test(d) ? country.dial + d : null;
  };

  if (international) {
    return digits.startsWith(country.dial) ? finish(digits.slice(country.dial.length)) : null;
  }
  // Primero como número nacional; si no calza, quizá el usuario incluyó el código de país sin "+".
  return finish(digits) ?? (digits.startsWith(country.dial) ? finish(digits.slice(country.dial.length)) : null);
}
