# Landing de captación de leads (`/cotiza/`)

Página independiente del sitio principal, pensada para tráfico de anuncios de Instagram y Facebook
(mobile-first). Objetivo único: que el visitante complete el formulario de cotización.

| Ruta | Archivo | Qué es |
| --- | --- | --- |
| `/cotiza/` | `cotiza/index.html` | Landing (URL para los anuncios) |
| `/gracias/` | `gracias/index.html` | Confirmación tras enviar el formulario (`noindex`) |

Código:

```
cotiza/index.html          HTML de la landing (10 secciones)
gracias/index.html         Página de agradecimiento
src/landing/config.ts      ⚙️  Píxel, WhatsApp, destinos de leads, Calendly
src/landing/landing.css    Estilos (Tailwind limitado a estas páginas)
src/landing/landing.ts     Animaciones, formulario multipaso, WhatsApp
src/landing/phone.ts       Códigos de país y validación de WhatsApp
src/landing/leads.ts       Envío a Google Sheets (Apps Script) y/o Supabase
src/landing/tracking.ts    Píxel de Meta + GA4 (carga diferida)
src/landing/gracias.ts     Lógica de /gracias/ (evento Lead, WhatsApp, Calendly)
public/fonts/              Geist variable autoalojada
```

Para los anuncios usa la URL con parámetros UTM; se guardan con cada lead:

```
https://jstack.digital/cotiza/?utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

---

## 1. Configuración

Todos los valores son públicos (terminan en el JavaScript del navegador). Tienes dos opciones:

- **Editar `src/landing/config.ts`** (lo más simple), o
- **Variables de entorno `VITE_*`** (ver `.env.example`). En Coolify agrégalas marcando
  *Build Variable*: Vite las lee al compilar, no en tiempo de ejecución.

| Ajuste | Variable | Por defecto |
| --- | --- | --- |
| ID del Píxel de Meta | `VITE_META_PIXEL_ID` | `2304651273692826` |
| Webhook de leads (Apps Script) | `VITE_LEAD_WEBHOOK_URL` | vacío |
| Supabase | `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_SUPABASE_TABLE` | vacío / `leads` |
| Calendly en /gracias/ | `VITE_CALENDLY_URL` | vacío (no se muestra) |
| WhatsApp | `VITE_WHATSAPP_NUMBER` | `16469804939` |
| Google Analytics 4 | `VITE_GA_MEASUREMENT_ID` | `G-48V3T3GC6C` |

> ⚠️ Sin webhook ni Supabase configurados el formulario igual redirige a `/gracias/`, pero el lead
> **no se guarda** (solo queda un aviso en la consola). Configura al menos un destino antes de
> lanzar los anuncios.

---

## 2. Guardar leads en Google Sheets (+ aviso por correo)

1. Crea una hoja de cálculo en Google Sheets.
2. Menú **Extensiones → Apps Script**, borra el contenido y pega este código:

```js
const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = 'jstackinfo@gmail.com'; // '' para no enviar correo
const COLUMNS = ['fecha', 'nombre', 'whatsapp', 'whatsapp_link', 'email', 'negocio', 'rubro', 'necesidad',
  'presupuesto', 'inicio', 'paquete', 'pais', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content',
  'utm_term', 'fbclid', 'pagina', 'referrer', 'event_id'];

function doPost(e) {
  const lead = JSON.parse(e.postData.contents);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    sheet.appendRow(COLUMNS.map((col) => (col === 'fecha' ? new Date() : asText(lead[col]))));
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    try {
      const rows = COLUMNS.filter((col) => col !== 'fecha' && lead[col])
        .map((col) => `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${col}</td><td style="padding:4px 0"><b>${escapeHtml(lead[col])}</b></td></tr>`)
        .join('');
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        replyTo: lead.email,
        subject: `⚡ Nuevo lead: ${lead.negocio} (${lead.nombre})`,
        htmlBody: `<h2>Nuevo lead desde /cotiza/</h2>
          <p><a href="${escapeHtml(lead.whatsapp_link)}">Responder por WhatsApp</a></p>
          <table>${rows}</table>`,
      });
    } catch (err) {
      console.error(err); // el lead ya quedó guardado en la hoja
    }
  }
  return ContentService.createTextOutput('ok');
}

// Sheets interpreta como fórmula un texto que empieza con =, +, - o @ (p. ej. el WhatsApp "+51…").
function asText(value) {
  const text = value === undefined || value === null ? '' : String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
```

3. **Implementar → Nueva implementación → Tipo: Aplicación web**.
   - Ejecutar como: **Yo**. Quién tiene acceso: **Cualquier usuario**.
   - Autoriza los permisos (Sheets y Gmail).
4. Copia la URL que termina en `/exec` y úsala como `VITE_LEAD_WEBHOOK_URL`.

> Si cambias el script, crea una **nueva versión** de la implementación; la URL se mantiene.
> El mismo webhook sirve para Make, Zapier o n8n: reciben un POST con el lead en JSON
> (`Content-Type: text/plain`).

---

## 3. Guardar leads en Supabase (opcional)

En el **SQL Editor** de tu proyecto:

```sql
create table public.leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  nombre text not null,
  whatsapp text not null,
  whatsapp_link text,
  email text not null,
  negocio text not null,
  rubro text,
  necesidad text,
  presupuesto text,
  inicio text,
  paquete text,
  pais text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  fbclid text,
  pagina text,
  referrer text,
  event_id text
);

alter table public.leads enable row level security;

-- La landing solo puede INSERTAR; nadie puede leer los leads con la clave pública.
create policy "landing inserta leads" on public.leads
  for insert to anon with check (true);
```

Luego define `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` (Project Settings → API). Para recibir
un aviso por cada lead, crea un *Database Webhook* sobre la tabla `leads`.

Si configuras Sheets y Supabase a la vez, el lead se envía a ambos; basta con que uno responda bien
para continuar a `/gracias/`.

---

## 4. Píxel de Meta y Analytics

| Evento | Cuándo | Dónde |
| --- | --- | --- |
| `PageView` | Primera interacción del visitante (scroll, toque, tecla) o a los 5 s | `/cotiza/` |
| `Contact` | Clic en cualquier botón de WhatsApp | `/cotiza/`, `/gracias/` |
| `Lead` | Envío exitoso del formulario | `/gracias/` |

- El `Lead` se dispara en `/gracias/` (al llegar desde el formulario) y no en el clic: así la
  redirección no corta la petición del píxel. Se dispara **una sola vez** aunque se recargue la
  página, y nunca si alguien abre `/gracias/` directamente.
- Lleva un `eventID` único (columna `event_id` del lead) para deduplicar si más adelante envías el
  mismo evento por la API de Conversiones.
- En `/gracias/` el píxel se inicia con *coincidencia avanzada* (correo, teléfono y nombre, que Meta
  hashea en el navegador) para mejorar la atribución.
- GA4 recibe `generate_lead` y `contact_whatsapp`.
- En `/cotiza/` los scripts de Meta y Google se cargan con la primera interacción: así no compiten
  con la carga inicial ni afectan la medición de PageSpeed.

---

## 5. Placeholders a completar

- [ ] Precios de los 3 paquetes: busca `[PRECIO]` en `cotiza/index.html`.
- [ ] Portafolio (6 tarjetas): reemplaza cada bloque `[Imagen del proyecto]` por la captura real y
      `[Nombre del proyecto]` por el nombre. Formato recomendado: WebP de ~960 px de ancho y menos de
      60 KB, con `loading="lazy"`, `width` y `height` (en el HTML hay un ejemplo comentado).
- [ ] URL de Instagram en el footer (`[PLACEHOLDER]` en `cotiza/index.html`).
- [ ] Destino de los leads (sección 1).
- [ ] Revisar textos propuestos: rangos de presupuesto (en US$, paso 3 del formulario), tiempos
      del proceso, contenido de cada paquete y respuestas del FAQ.

---

## 6. Rendimiento (100/100 en PageSpeed)

Medido con Lighthouse 12 en perfil móvil (el mismo motor de PageSpeed Insights): 100 en
Rendimiento, Accesibilidad, Buenas prácticas y SEO. Decisiones que lo hacen posible:

- **HTML estático + CSS incrustado**: el primer pintado solo necesita el HTML. Sin React ni
  framework en el cliente (~6 KB de JS comprimido).
- **El JS se descarga después del primer pintado** (`vite.config.ts → optimizeLandingPages`): el
  formulario y las animaciones son mejora progresiva.
- **Mockup del hero hecho en CSS**, sin imágenes; favicon en línea.
- **Fuente Geist autoalojada y precargada** (29 KB) con una fuente de respaldo de métricas ajustadas
  para evitar saltos de diseño.
- **Píxel y Analytics diferidos** hasta la primera interacción.
- Las animaciones decorativas arrancan con la primera interacción y respetan
  `prefers-reduced-motion`.

Para no perder el 100 al editar: imágenes nuevas en WebP con `loading="lazy"` y dimensiones;
no agregues scripts de terceros en el `<head>`; carga cualquier widget nuevo con la primera
interacción (ver `onFirstIntent` en `src/landing/tracking.ts`).

---

## 7. Despliegue

`npm run build` genera `dist/cotiza/index.html` y `dist/gracias/index.html` junto al sitio
principal. Ambas formas de servir el sitio ya están preparadas:

- **Docker + nginx** (`nginx.conf`): `/cotiza` y `/cotiza/` sirven la landing; el resto sigue
  cayendo al SPA. Los assets con hash y las fuentes se cachean un año.
- **`npm start` / Nixpacks** (`serve`): las reglas están en `public/serve.json`. Se quitó `-s`
  porque esa opción reescribía todas las rutas (incluida `/cotiza/`) al SPA.

El archivo de la fuente no lleva hash y se cachea un año: si la cambias, cambia también su nombre.
