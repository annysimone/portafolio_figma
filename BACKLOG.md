# Backlog técnico — Portafolio Anny Mamani

> **Estado en vivo:** ver **`PROJECT-STATUS.md`** (producción, pendientes, orden entre agentes).  
> **Producción:** `main` @ `8dd870a` · https://annymamaniportafolioux.vercel.app  
> **Alcance de este backlog:** copy estratégico, consistencia narrativa y metadata en texto.  
> **Fuera de alcance (por ahora):** nuevas imágenes, diagramas de proceso, prototipos embebidos, features nuevas de producto.

---

## Acotaciones acordadas

| Tema | Regla |
|------|--------|
| **Título de perfil** | Solo **Product Designer** en todo lo visible (Home, About, headers, metadata). **No** mostrar “Senior” como seniority. |
| **Nivel de trabajo interno** | Análisis, recorte de copy, coherencia narrativa y correcciones con **criterio de nivel senior** — calidad alta, sin reflejarlo en el título del rol. |
| **Componentes visuales** | **No cambiar layout:** post-its, cards, galerías con scroll, imágenes, grids, flechas, espaciados. |
| **Qué sí editamos** | Texto dentro de bloques existentes (`project-*.ts`, `ui.ts`, `site.ts`): títulos, párrafos, bullets, post-its, captions — más corto y profesional, **sin perder sentido ni contexto**. |
| **Producción** | Trabajo en **branch** desde `main` actual; merge + deploy solo **Principal** tras tu OK |

---

## Estado P1 tras deploy Principal

- [x] **P1-1, P1-3, P1-4** — parcialmente en `863fecb` (project-1, project-3, project-4)
- [ ] **P1-2** — AppCres recorte (`project-2.ts`) — **siguiente prioridad**
- [ ] **P1-5** — About multi-cliente (`ui.ts`)

Ver **`PROJECT-STATUS.md`** para orden completo y registro de sesiones.

---

## Cómo trabajar este backlog

### ¿Modo Task / Agent por ítem?

**Sí, a partir de ahora.** Cada ítem del backlog = 1 sesión de agente (o 1 PR pequeño).  
Ventaja: cambios acotados, fáciles de revisar en localhost antes de merge.

### ¿Branch?

**Sí, recomendado** para esta fase de mejoras de copy (ya publicaste `main`).

| Paso | Comando / acción |
|------|------------------|
| Crear branch | `git checkout -b content/portfolio-copy-v2` |
| Trabajar ítems | 1–3 tareas por sesión |
| Verificar | `npm run build` + preview en localhost |
| Publicar | Merge a `main` → commit/push/deploy en **agente principal** |

**No commitear en `main` directo** salvo hotfixes urgentes.

### ¿Pierdo la versión publicada?

**No.** Git guarda cada versión como una foto (commit). Hoy:

```
main (producción)  →  8dd870a  →  Vercel (P0 + P1 parcial incluidos)
         │
         └── content/portfolio-copy-v3  →  crear desde main para próximo trabajo
```

- **`content/portfolio-copy-v2`** ya fue mergeada; no reutilizar.

---

### División de agentes

| Agente | Responsabilidad |
|--------|-----------------|
| **Principal** | Merge, push `main`, deploy Vercel, `sync:vercel-urls` |
| **Backlog / Soluciones** | Copy en branch; actualizar `PROJECT-STATUS.md`; **no deploy** |

Al cerrar: actualizar **`PROJECT-STATUS.md`** (registro de sesiones) y marcar `[x]` aquí.

**Próxima branch:** `content/portfolio-copy-v3` (desde `main` @ `8dd870a`).

---

## Principios de copy (Product Designer)

Aplicar en **todos** los ítems de texto.

**Visible al lector:** rol = **Product Designer** (nunca “Senior Product Designer” ni equivalentes).

**Estándar interno del backlog:** redactar y corregir con profundidad de **nivel senior** — impacto, decisiones, trade-offs, outcomes, voz activa, cero WIP — sin usar esa palabra en el copy del portafolio.

1. **Impacto primero** — qué problema de negocio/usuario, qué cambió (aunque sea direccional).
2. **Menos texto, más decisión** — cortar repetición; cada párrafo debe aportar contexto, decisión o resultado.
3. **Voz activa y ownership** — “Diseñé / Prioricé / Definí” vs “se diseñó / se detectó”.
4. **Coherencia problema → solución** — si Challenge menciona 3 módulos, Solution o Outcomes deben cerrarlos (o acotar el scope).
5. **Sin WIP publicado** — nada de “Por hacer”, “primer acercamiento”, notas internas.
6. **ES + EN en paralelo** — cada edición en `project-*.ts` debe actualizar ambos idiomas.
7. **Solo texto, mismo layout** — no mover post-its, no cambiar variantes de cards ni galerías; editar strings dentro de bloques existentes.

---

## P0 — Corregir antes de compartir el portafolio

### P0-1 · Eliminar copy WIP en Project 3
- [x] Hecho en Sprint 1 (`content/portfolio-copy-v2`)
- **Archivo:** `src/data/case-studies/project-3.ts`
- **Qué:** Reemplazar post-its `"Por hacer: …"` por entregables en pasado o eliminar post-its.
- **También:** corregir `"data entrys"` → `"data entry"` / `"registros"`.
- **DoD:** Cero strings “Por hacer” en el build.

### P0-2 · Reencuadrar Challenge en Project 3
- [x] Hecho en Sprint 1 (`content/portfolio-copy-v2`)
- **Archivo:** `src/data/case-studies/project-3.ts`
- **Qué:** Cards E-commerce / Landing = **dolores** (canal pausado, formularios 15 min, cero conversión). Mover entregables a Soluciones.
- **DoD:** Un recruiter entiende el problema en 10 s sin leer Overview entero.

### P0-3 · Bloque Resultados en P1, P3, P4
- [x] Hecho en Sprint 1 (`content/portfolio-copy-v2`)
- **Archivos:** `project-1.ts`, `project-3.ts`, `project-4.ts`
- **Qué:** Añadir sección `Resultados` / `Outcomes` (heading h2 + 3–4 bullets o cards `row3`) **antes** del footer de related projects.
- **Contenido:** Cerrar métricas/objetivos ya mencionados (ANS, TTC, tiempo de formulario, etc.) aunque sea direccional.
- **DoD:** Cada case study termina con impacto explícito, no solo solución.

### P0-4 · Alinear metadata en `site.ts`
- [x] Hecho en Sprint 1 (`content/portfolio-copy-v2`)
- **Archivo:** `src/data/site.ts`
- **Qué:**
  - `gestion-horas.year` → `2025` (no “Pacífico Seguros” en el campo year del home).
  - AppCres `aboutLabel`: “Plataforma de gestión de **inversiones**” (alinear con `project-2` header).
  - Revisar `imageAlt` / títulos vs headers de case studies.
- **DoD:** Home, About y case study dicen lo mismo del producto.

### P0-5 · Home intro sin redundancia
- [x] Hecho en Sprint 1 (`content/portfolio-copy-v2`)
- **Archivo:** `src/i18n/ui.ts` (+ `HomePage.astro` si hace falta)
- **Qué:** Un solo mensaje de identidad en el hero; `description` para SEO o merge en intro más corta.
- **Objetivo:** Headline = rol + dominio + diferenciador (fintech, seguros, plataformas internas).
- **DoD:** No repetir “Soy Anny Mamani…” dos veces en el fold.

---

## P1 — Narrativa senior y recorte estratégico

### P1-1 · Project 1 — Cerrar arcos narrativos
- **Archivo:** `project-1.ts`
- **Qué:**
  - Unificar Situación vs Impacto (evitar repetir ANS).
  - Overview menciona Tarjetas de Crédito → añadir 1 línea en Soluciones **o** quitar CC del Overview.
  - Fase CHECK en `phases` → añadir párrafo breve CHECK **o** quitar Check del diagrama.
  - Recortar MAKE a ~3 oraciones (decisiones, no “desarrollé competencias”).
  - Aprendizajes: 3–4 bullets orientados a outcome.
- **DoD:** Think → Make → Check → Soluciones → Resultados fluye sin huecos.

### P1-2 · Project 2 — Recorte masivo (sin quitar secciones visuales)
- **Archivo:** `project-2.ts`
- **Qué recortar (solo texto):**
  - Overview oportunidades: 3 párrafos → 1.
  - Lista DESCUBRIR: 4 bullets → 2 o 1 resumen.
  - Cards objetivos investigación: eliminar si duplican ANALIZAR.
  - Párrafo insights: 2 frases máximo.
  - Filas HMW: 1 oración por celda (need, hmw, guidelines).
  - IA + KPIs: una sola lista, no duplicar “measurable outcomes”.
  - ENTREGAR: reencuadrar ausencia de UAT (qué se validó igualmente).
  - Aprendizaje 5: quitar “primer acercamiento”.
- **DoD:** ~30–40% menos palabras; misma estructura visual.

### P1-3 · Project 3 — Rol, cierre y tono
- **Archivo:** `project-3.ts`
- **Qué:**
  - Overview: 2.ª oración con rol y scope (“Product Designer — e-commerce + landing”).
  - Añadir `Aprendizajes` (3–4 bullets).
  - Unificar casing: `e-commerce`, `lead capture form`.
- **DoD:** Misma profundidad de cierre que P1/P2.

### P1-4 · Project 4 — Puente Challenge → Solución
- **Archivo:** `project-4.ts`
- **Qué:**
  - Párrafo puente post-Challenge (“Del kickoff + auditoría priorizamos…”).
  - Objetivos mencionan Horas / Asignaciones / Tarifas → acotar copy a lo documentado **o** 1 bullet cada uno en Solución (texto, sin imágenes nuevas).
  - Añadir `Aprendizajes` + reforzar `Resultados` (P0-3).
- **DoD:** No prometer módulos sin mención en Solución/Resultados.

### P1-5 · About alineado al portafolio completo
- **Archivo:** `src/i18n/ui.ts` → `about.body`
- **Qué:** 2 párrafos cortos: positioning (plataformas reguladas) + highlights Interbank / Pacífico / ACRES con años.
- **DoD:** About ya no lee como “solo ASSI”.

---

## P2 — Consistencia estructural (texto + tipos)

### P2-1 · Metadata en header de case study
- **Archivos:** `src/data/types.ts`, `CaseStudyHeader.astro`, `project-{1..4}.ts`
- **Campos nuevos (texto):** `role`, `scope`, `outcome` (Localized).
- **DoD:** Panel hero muestra rol + scope + outcome en los 4 proyectos.

### P2-2 · Arquitectura de secciones unificada
- **Archivos:** todos los `project-*.ts`
- **Spine objetivo:** Overview → Desafío → Proceso → Solución → Resultados → Aprendizajes.
- **DoD:** Mismos h2 (ES/EN) y orden lógico en los 4; renombrar `Challenge`/`Proceso`/`Solución` de forma consistente.

### P2-3 · Glosario y tono transversal
- **Archivos:** todos los `project-*.ts`
- **Qué:** Pasada final de terminología (ANS definido una vez, voz activa, sin passive junior).
- **Fixes rápidos:**
  - P2 L84: “se detectaron las”
  - P2 L300: “así que”
  - P1 HMW label sin “¿”
- **DoD:** Mismo tono profesional en ES y EN.

### P2-4 · `meta.description` por proyecto
- **Archivos:** `project-{1..4}.ts`
- **Qué:** Una línea outcome-first por proyecto (SEO + LinkedIn preview).
- **DoD:** Descriptions alineadas con header.outcome.

---

## P3 — Backlog diferido (no priorizar ahora)

Funcionalidades de producto — **después** de cerrar P0–P2:

- [ ] Slugs legibles (`/work/interbank-assi`)
- [ ] CV PDF descargable
- [ ] CTA persistente + Calendly
- [ ] `@astrojs/sitemap` + 404
- [ ] Dark mode activo
- [ ] Figma embeds / before-after
- [ ] Analytics (Plausible)
- [ ] TOC sticky en case studies

---

## Orden de ejecución sugerido

```
Sprint 1 (P0)     → P0-1, P0-2, P0-4, P0-5, P0-3
Sprint 2 (P1)     → P1-5, P1-3, P1-4, P1-1
Sprint 3 (P1+P2)  → P1-2 (AppCres, el más largo), P2-1, P2-2, P2-3, P2-4
Publicar          → merge content/portfolio-copy-v2 → agente principal deploy
```

---

## Plantilla de commit (copy)

```
Mejorar copy estratégico en [project_X / home / about].

Resume narrativa, cierra outcomes y alinea tono profesional sin cambiar layout ni assets visuales.
```

---

## Checklist pre-publicación (cada sprint)

- [ ] `npm run build` sin errores
- [ ] Revisión visual ES: Home, About, 4 case studies
- [ ] Revisión visual EN: mismas rutas bajo `/en/`
- [ ] Sin strings WIP (“Por hacer”, “TODO”, referencias Figma internas)
- [ ] Agente principal: merge → push → Vercel
