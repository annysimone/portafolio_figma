# Estado del proyecto — fuente única para todos los agentes

> **Leer este archivo al inicio de cada chat** antes de editar código, commitear o desplegar.  
> **Actualizar este archivo** al terminar cada sesión (qué se hizo, commit, qué falta).

---

## Producción actual (Vercel)

| Campo | Valor |
|-------|--------|
| **Rama publicada** | `main` |
| **Commit en producción** | `92d01f2` |
| **URL producción** | https://portafolio-figma-nu.vercel.app |
| **Repo** | https://github.com/annysimone/portafolio_figma.git |

### Historial reciente en `main`

| Commit | Contenido |
|--------|-----------|
| `92d01f2` | **Sprint 5:** slugs legibles, redirects, 404, sitemap, JSON-LD, analytics, a11y, spine + glosario |
| `0a75978` | Eliminar alias custom; `site` → `portafolio-figma-nu.vercel.app` |
| `8fbcd3d` | Sprint 3: nav fijo, CV ES/EN, OG, tarjetas clicables, sticky nav |
| `863fecb` | Sprint 2 parcial (P1): copy P1, P3, P4 |
| `03fc5ce` | Sprint 1 (P0): copy Home, P3 Challenge, Resultados P1/P3/P4, site.ts |

---

## Rama de trabajo

| Rama | Estado | Notas |
|------|--------|-------|
| `main` | ✅ Producción | Trabajar desde aquí o crear branch nueva **desde** `main` |
| `content/portfolio-copy-v4` | ✅ Mergeada | Sprint 5 — mergeada y desplegada en `92d01f2` |

**Próxima branch de trabajo:**

```bash
git checkout main && git pull origin main
git checkout -b content/portfolio-copy-v5   # siguiente sprint
```

---

## Roles de agentes (no mezclar sin leer esto)

| Agente | Chat | Puede | No puede |
|--------|------|-------|----------|
| **Principal** | Figma import / deploy | merge `main`, push, `vercel deploy` | Editar copy masivo sin revisar BACKLOG |
| **Backlog / copy** | Este hilo + tasks P0–P2 | Editar `src/data/**`, `ui.ts`, `site.ts`; commit en **branch**; actualizar BACKLOG + este archivo | push `main`, deploy Vercel |
| **Case study** | Contenido + diseño por proyecto | Refinar copy **y** modificar componentes, estilos, imágenes; commit en **branch** tras `npm run build` OK | push `main`, deploy Vercel |
| **Soluciones** | Agente estratégico por proyecto | Mejorar Solución/Proceso/Resultados en `project-*.ts`; branch; actualizar este archivo | Inventar métricas; deploy |
| **Tú (Anny)** | — | Aprobar merge, validar hechos, revisar localhost | — |

> **Regla clave de Git:** cualquier agente de trabajo puede hacer `commit` en la **branch** activa; **solo Principal** hace `merge a main` + `push` + **deploy Vercel**.

---

## Protocolo anti-errores (Git + Vercel)

1. **Antes de editar:** `git status` + leer este archivo + `BACKLOG.md`.
2. **Una línea de trabajo activa:** o todos en la misma branch, o solo Principal toca `main`.
3. **Antes de deploy (solo Principal):**
   - `npm run build` OK
   - Usuario revisó localhost
   - `BACKLOG.md` / este archivo actualizados
   - `git push origin main`
   - `npx vercel deploy --prod --yes`
4. **Nunca** deploy desde chats de copy/soluciones sin pasar por Principal.
5. **Al terminar sesión:** commit descriptivo + actualizar sección "Hecho / Pendiente" abajo.

---

## Mensaje de arranque (copiar en cualquier agente)

```
Lee PROJECT-STATUS.md y BACKLOG.md en la raíz del repo antes de actuar.
Producción: main @ 92d01f2. Sigue el protocolo de roles y no hagas deploy salvo que seas Principal.
Mi tarea de hoy: [DESCRIBE AQUÍ]
```

---

## Backlog — hecho vs pendiente

Detalle completo en **`BACKLOG.md`**. Resumen:

### ✅ Hecho (en producción `main` @ `92d01f2`)

- [x] **Sprint 5:** slugs `/work/*`, redirects `/project_*`, `404.astro`, sitemap, JSON-LD, analytics hook, a11y
- [x] **Spine narrativo** + glosario en case studies
- [x] **Subfases h3** Desafío → Proceso → Solución (P1/P2)
- [x] Sprints 1–3 (copy, nav, CV, OG, tarjetas clicables)

### ⏳ Pendiente (manual / siguiente sprint)

| Orden | Tarea | Responsable |
|-------|-------|-------------|
| 1 | Activar **Vercel Analytics** en dashboard del proyecto | Anny |
| 2 | Hard refresh en producción (`Cmd+Shift+R`) y validar checklist post-deploy | Anny |
| 3 | Siguiente sprint de copy/features según `BACKLOG.md` | Backlog + Principal |

---

## Acotaciones globales (todos los agentes)

- Rol visible: **Product Designer** (nunca "Senior" en UI).
- Calidad interna: criterio de nivel senior en análisis y copy.
- **No cambiar** layout: post-its, cards, galerías, imágenes (salvo tarea explícita).
- Solo editar strings en bloques existentes (salvo tarea explícita).

---

## Registro de sesiones

| Fecha | Agente | Commit | Notas |
|-------|--------|--------|-------|
| 2026-07-06 | Backlog | `03fc5ce` | Sprint 1 P0 en branch |
| 2026-07-07 | Backlog/Principal | `863fecb` | Sprint 2 P1 parcial → merge main |
| 2026-07-09 | Principal | `92d01f2` | Sprint 5 merge + deploy: SEO, rutas, spine, glosario |

---

## Qué decirle al Principal ahora

```
Sprint 5 desplegado en 92d01f2. Próximo trabajo en nueva branch desde main.
Anny: activar Analytics en Vercel dashboard si aún no está habilitado.
```
