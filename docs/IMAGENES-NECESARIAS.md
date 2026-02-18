# Imágenes necesarias para el proyecto (que no están en el repo)

Estas imágenes se referencian en el código pero **no existen** en la carpeta `public/`. Hay que crearlas y colocarlas en `public/` para que la web y el SEO funcionen correctamente.

---

## 1. Imagen Open Graph / redes sociales — **obligatoria**

| Campo | Valor |
|-------|--------|
| **Ruta en el proyecto** | `public/og-image.jpg` |
| **Proporción** | 1,91:1 (horizontal) |
| **Tamaño recomendado** | **1200 × 630 px** (mínimo 600 × 315 px) |
| **Formato** | JPG o PNG (JPG suele pesar menos) |
| **Peso orientativo** | &lt; 1 MB (ideal &lt; 300 KB para carga rápida) |

**Uso:** Aparece al compartir enlaces en Facebook, LinkedIn, Twitter/X, WhatsApp, etc. También se usa como `logo` en Schema.org.

**Contenido sugerido:** Logo Eurometales + texto tipo “Distribuidores de hierro, acero y metales en España” sobre fondo que encaje con la marca. Evitar texto pequeño (se ve reducido en redes).

**Referencias en código:** `index.html`, `src/config/site.ts` (`ogImage`, `logo`), y todas las páginas con Helmet (meta `og:image`, `twitter:image`).

---

## 2. Favicon — **obligatorio**

| Campo | Valor |
|-------|--------|
| **Ruta en el proyecto** | `public/favicon.png` |
| **Proporción** | 1:1 (cuadrado) |
| **Tamaños recomendados** | **32 × 32 px** (principal). Opcional: 16×16 y 48×48 para distintos navegadores. |
| **Formato** | PNG (con transparencia si aplica) |

**Uso:** Icono en la pestaña del navegador, marcadores y, actualmente, también como `apple-touch-icon` (se reutiliza el mismo archivo).

**Referencias en código:** `index.html` (`rel="icon"`, `rel="apple-touch-icon"`).

---

## 3. Apple Touch Icon — **opcional** (mejora en móviles)

| Campo | Valor |
|-------|--------|
| **Ruta en el proyecto** | `public/apple-touch-icon.png` |
| **Proporción** | 1:1 (cuadrado) |
| **Tamaño** | **180 × 180 px** |
| **Formato** | PNG |

**Uso:** Icono al “Añadir a la pantalla de inicio” en iOS (y en algunos Android). Si no existe este archivo, el proyecto usa `favicon.png`; crear este tamaño mejora la nitidez en móviles.

**Nota:** Si añades este archivo, en `index.html` cambia la línea del apple-touch-icon de `href="/favicon.png"` a `href="/apple-touch-icon.png"`.

---

## 4. Logo para Schema.org — **opcional** (misma que OG o dedicada)

| Campo | Valor |
|-------|--------|
| **Ruta en el proyecto** | Puede ser `public/logo.png` o reutilizar `public/og-image.jpg` |
| **Proporción** | Preferible cuadrado o ancho conocido (ej. 1:1 o 4:1) |
| **Tamaño** | Mínimo 112 × 112 px (Google); recomendado 512 × 512 px o similar si es cuadrado. |
| **Formato** | PNG o JPG |

**Uso:** Logo de la empresa en el schema (LocalBusiness/Organization). Ahora mismo en `site.ts` se usa `logo: "/og-image.jpg"`. Si tienes un logo cuadrado propio, crea `public/logo.png` y en `src/config/site.ts` cambia a `logo: "/logo.png"`.

---

## Resumen rápido

| Imagen | Ubicación | Tamaño | Formato | Prioridad |
|--------|-----------|--------|---------|-----------|
| **og-image** | `public/og-image.jpg` | 1200 × 630 px | JPG (o PNG) | Obligatoria |
| **favicon** | `public/favicon.png` | 32 × 32 px (y opc. 16, 48) | PNG | Obligatoria |
| **apple-touch-icon** | `public/apple-touch-icon.png` | 180 × 180 px | PNG | Opcional |
| **logo** (schema) | `public/logo.png` o reutilizar og-image | ej. 512 × 512 px | PNG | Opcional |

---

## Imágenes que sí están en el proyecto

- **Header y footer:** logo desde `src/assets/logo-eurometales.png` (empaquetado por Vite).
- **Landing y productos:** todas las imágenes de `src/config/images.ts` se cargan desde `src/assets/images/` (landing y products).

No hace falta duplicar esas en `public/` a menos que quieras servir alguna por URL fija (por ejemplo, para redes sociales).
