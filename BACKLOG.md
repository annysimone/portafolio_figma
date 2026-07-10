# Backlog — Portafolio Anny Mamani

> **Estado en vivo:** ver **`PROJECT-STATUS.md`** (producción, pendientes, roles).
> **Producción:** `main` · https://portafolio-figma-nu.vercel.app
> **Rol visible:** solo **Product Designer** (nunca "Senior" en la UI).
> **Regla de layout:** no cambiar estructura de post-its, cards, galerías ni imágenes sin acuerdo; editar texto dentro de bloques existentes. Los cambios de componentes/imágenes van coordinados (ver roles).

---

## Acotaciones acordadas (aplican a todo)

| Tema | Regla |
|------|--------|
| **Título de perfil** | Solo **Product Designer** en todo lo visible. **No** mostrar "Senior". |
| **Nivel interno** | Análisis, recorte y coherencia con **criterio senior** — calidad alta sin reflejarlo en el título. |
| **Layout** | No romper el layout acordado. Ajustes visuales (tamaños, spacing, nuevos bloques) van coordinados y verificados. |
| **Qué editamos** | Texto en `project-*.ts`, `ui.ts`, `site.ts`; componentes/estilos solo con verificación de build + revisión en localhost. |
| **Producción** | Trabajo en **branch** desde `main`; merge + deploy **solo Principal** tras OK de Anny. |

---

## ✅ Archivo — cumplido (histórico)

> No borrar. Referencia de lo ya hecho y en qué commit.

### Sprint 0 — Migración e infraestructura
- [x] Migración Figma Sites → Astro (estructura ES/EN, assets) — `d47a80f`
- [x] Repo GitHub + deploy Vercel + doble URL con `sync:vercel-urls` — `8dd870a`
- [x] Reglas de coordinación (`PROJECT-STATUS.md`, `project-coordination.mdc`, `git-deploy-main-agent.mdc`)

### Sprint 1 — P0 copy (`03fc5ce`)
- [x] P0-1 Eliminar copy WIP en Project 3 ("Por hacer", "data entrys")
- [x] P0-2 Reencuadrar Challenge de Project 3 como dolores
- [x] P0-3 Bloque Resultados en P1, P3, P4
- [x] P0-4 Alinear metadata en `site.ts` (año gestión-horas, AppCres inversiones)
- [x] P0-5 Home intro sin redundancia

### Sprint 2 — P1 narrativa (`863fecb`)
- [x] P1-1 Project 1 — cerrar arcos narrativos
- [x] P1-3 Project 3 — rol, cierre y tono + Aprendizajes
- [x] P1-4 Project 4 — puente Challenge → Solución + Aprendizajes

### Sesión Soluciones + refinamiento (local `main`, sin desplegar)
- [x] Soluciones potenciadas en los 4 proyectos (P4 → P3 → P1 → P2)
- [x] Refinamiento copy + KPIs: P2 AppCres (`4cc9b52`), P1 ANS (`9c1a87d`), P4 flecha KPI + Asignaciones (`2dd7d9a`, `5c97ff9`), P3 Sepelio (`242897e`)
- [x] P1-2 Recorte AppCres — cubierto en el refinamiento de P2

### Sesión Backlog + Case study (branch `content/portfolio-copy-v3`, `d0ea617` en adelante)
- [x] P1-5 About multi-cliente en `ui.ts` (Interbank, Pacífico, ACRES con años)
- [x] P2-4 `meta.description` outcome-first en los 4 proyectos
- [x] Ajustes visuales: `widthReduce` por imagen, post-its responsive
- [x] **N0-1** Header con `role · scope · outcome` en los 4 case studies *(valores direccionales — validar con Anny)*
- [x] **N0-2** CTA de contacto persistente en nav ("Conversemos" / "Let's talk")
- [x] **N0-3** Botón CV (PDF) en About *(pendiente subir los archivos PDF)*
- [x] **N0-4** OG image por proyecto (fix del bug que usaba siempre project_1) + tags Twitter

### Sprint 5 — SEO, rutas y accesibilidad (branch `content/portfolio-copy-v4`, sin desplegar)
- [x] **N1-3** Slugs legibles `/work/*` + redirects 301 desde `/project_*` (Astro + vercel.json)
- [x] **N2-1** `@astrojs/sitemap` + página `404.astro` bilingüe
- [x] **N2-3** JSON-LD `Person` en layout
- [x] **N2-4** Vercel Analytics (`@vercel/analytics`)
- [x] **N1-4** A11y: skip link bilingüe, `:focus-visible`, `prefers-reduced-motion`, aria en carrusel
- [x] **N1-1** Spine unificado (h2 macro + subfases h3; sin mover bloques)
- [x] **N2-5** Glosario/tono (voz activa, casing, HMW label, ANS sin repetir definición)
- [ ] **N1-2** Testimonios — omitido (sin citas disponibles)
- [ ] **N2-2** Optimización imágenes (`astro:assets`) — diferido (tocaría componentes de imagen)

---

## 🔜 Backlog nuevo (post-actualización)

Ordenado por impacto. Cada ítem = 1 sesión / PR pequeño. DoD = "definición de hecho".

### 🟥 P0 — Antes de compartir con clientes/recruiters

#### N0-1 · Header `role · scope · outcome`  ✅ hecho *(falta validación de contenido)*
- **Archivos:** `types.ts`, `CaseStudyHeader.astro`, `project-*.ts`, `global.css`
- **Pendiente:** Anny valida los textos de `scope` y `outcome` de cada proyecto (hoy direccionales).
- **DoD:** Panel hero muestra rol + alcance + resultado validados en los 4.

#### N0-2 · CTA de contacto persistente  ✅ hecho
- **Archivos:** `Navigation.astro`, `ui.ts`, `global.css`
- **DoD:** Botón visible en todas las páginas que abre correo.

#### N0-3 · CV en PDF descargable  ✅ hecho
- **Archivos:** `AboutPage.astro`, `site.ts` (`cvHref`), `public/cv/`
- **DoD:** Botón descarga el PDF correcto por idioma, sin 404.

#### N0-4 · OG images  ✅ hecho
- **Archivos:** `Portfolio.astro`, `CaseStudyPage.astro`, `public/og-image.png`, `site.ts` (`portfolioOgImage`)
- **DoD:** Cada URL muestra preview correcta al compartir en LinkedIn/WhatsApp.

#### N0-4b · OG dedicada del portafolio  ✅ hecho
- **Asset:** `public/og-image.png` (1200×630) — foto, nombre, rol, acentos de marca (#ab0782, #0034ad).
- **Alcance:** Home y About (default en `Portfolio.astro`); case studies siguen con preview del proyecto.
- **DoD:** Al compartir la URL principal se ve la tarjeta de marca, no el screenshot de Figma (400×220).

### 🟧 P1 — Credibilidad y consistencia

#### N1-1 · Spine de secciones unificado  ✅ hecho
- Macro h2: Overview → Desafío → Proceso → Solución → Resultados → Aprendizajes.
- Subfases del proyecto (THINK/MAKE/CHECK, DESCUBRIR/…) pasan a h3 bajo **Proceso**; bloques sin reordenar.

#### N1-2 · Testimonios / recomendaciones  ⏸ omitido
- Sin citas disponibles por ahora.

#### N1-3 · Slugs legibles  ✅ hecho
- **Rutas:** `/work/interbank-assi`, `/work/appcres`, `/work/pacifico-sepelio`, `/work/tom-3-pacifico` (+ `/en/work/...`)
- **Redirects:** `/project_1`…`project_4` → nuevas rutas (301)

#### N1-4 · Auditoría de accesibilidad  ✅ parcial
- Skip link bilingüe, `:focus-visible`, `prefers-reduced-motion`, aria en carrusel.
- **Pendiente futuro:** auditoría Lighthouse/axe completa.

### 🟨 P2 — Pulido y descubribilidad

#### N2-1 · Sitemap + página 404  ✅ hecho

#### N2-2 · Optimización de imágenes  ⏸ diferido

#### N2-3 · Datos estructurados (JSON-LD `Person`)  ✅ hecho

#### N2-4 · Analytics ligero  ✅ hecho (Vercel Analytics; activar en dashboard Vercel)

#### N2-5 · Glosario y tono transversal  ✅ hecho
- Voz activa (P2), casing `e-commerce`, HMW sin `¿`, ANS definido una vez en P1, ES sin anglicismos sueltos donde aplica.

### 🟩 P3 — Diferenciadores (opcional)
- [ ] TOC sticky en case studies
- [ ] Dark mode pulido (revisar contraste en todos los bloques)
- [ ] Micro-interacciones / transiciones de página
- [ ] Sección "Cómo colaboro" / proceso de trabajo
- [ ] Before/after o embeds de Figma
- [ ] Dominio propio (retomar cuando Anny decida)

---

## Cómo trabajar cada ítem

1. Leer `PROJECT-STATUS.md` + este archivo + `git status`.
2. Branch de trabajo desde `main` (una activa a la vez).
3. 1–3 ítems por sesión; `npm run build` OK; revisión en localhost.
4. Commit en la **branch** (cualquier agente de trabajo puede commitear en branch).
5. **Solo Principal:** merge a `main` + push + deploy Vercel + `sync:vercel-urls`.
6. Al cerrar: mover el ítem a "Archivo — cumplido" con su commit y actualizar `PROJECT-STATUS.md`.

---

## Plantilla de commit

```
[área] Descripción corta del cambio.

Qué mejora y por qué, sin cambiar layout/assets salvo lo indicado.
```

## Checklist pre-publicación

- [ ] `npm run build` sin errores
- [ ] Revisión ES: Home, About, 4 case studies
- [ ] Revisión EN: mismas rutas bajo `/en/`
- [ ] Sin strings WIP ("Por hacer", "TODO")
- [ ] PDFs de CV subidos si el botón está activo
- [ ] Principal: merge → push → Vercel → `sync:vercel-urls`
