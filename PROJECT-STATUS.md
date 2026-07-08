# Estado del proyecto — fuente única para todos los agentes

> **Leer este archivo al inicio de cada chat** antes de editar código, commitear o desplegar.  
> **Actualizar este archivo** al terminar cada sesión (qué se hizo, commit, qué falta).

---

## Producción actual (Vercel)

| Campo | Valor |
|-------|--------|
| **Rama publicada** | `main` |
| **Commit en producción** | `8dd870a` |
| **Local `main` (sin desplegar)** | `5c97ff9` — refinamiento copy/KPIs P1–P4 (pendiente push + deploy por Principal) |
| **URL principal** | https://annymamaniportafolioux.vercel.app |
| **URL secundaria** | https://portafolio-figma-nu.vercel.app |
| **Repo** | https://github.com/annysimone/portafolio_figma.git |

### Historial reciente en `main`

| Commit | Contenido |
|--------|-----------|
| `8dd870a` | Regla/script sync URLs Vercel (Principal) |
| `863fecb` | Sprint 2 parcial (P1): copy P1, P3, P4 |
| `03fc5ce` | Sprint 1 (P0): copy Home, P3 Challenge, Resultados P1/P3/P4, site.ts |
| `d47a80f` | Portafolio estructurado ES/EN + assets (base Figma) |

---

## Rama de trabajo

| Rama | Estado | Notas |
|------|--------|-------|
| `main` | ✅ Producción + último merge | Trabajar desde aquí o crear branch nueva **desde** `main` |
| `content/portfolio-copy-v2` | ⚠️ Obsoleta | Mergeada en `main` hasta `863fecb`; **1 commit detrás** (`8dd870a`). No usar — borrar tras confirmar |

**Próxima branch de copy (cuando retomes backlog):**

```bash
git checkout main && git pull origin main
git checkout -b content/portfolio-copy-v3
```

---

## Roles de agentes (no mezclar sin leer esto)

| Agente | Chat | Puede | No puede |
|--------|------|-------|----------|
| **Principal** | Figma import / deploy | merge `main`, push, `vercel deploy`, `sync:vercel-urls` | Editar copy masivo sin revisar BACKLOG |
| **Backlog / copy** | Este hilo + tasks P0–P2 | Editar `src/data/**`, `ui.ts`, `site.ts`; commit en **branch**; actualizar BACKLOG + este archivo | push `main`, deploy Vercel |
| **Soluciones** | Agente estratégico por proyecto | Mejorar Solución/Proceso/Resultados en `project-*.ts`; branch; actualizar este archivo | Inventar métricas; cambiar layout/imágenes; deploy |
| **Tú (Anny)** | — | Aprobar merge, validar hechos, revisar localhost | — |

---

## Protocolo anti-errores (Git + Vercel)

1. **Antes de editar:** `git status` + leer este archivo + `BACKLOG.md`.
2. **Una línea de trabajo activa:** o todos en la misma branch, o solo Principal toca `main`.
3. **Antes de deploy (solo Principal):**
   - `npm run build` OK
   - Usuario revisó localhost
   - `BACKLOG.md` / este archivo actualizados
   - `git push origin main`
   - Deploy Vercel
   - `npm run sync:vercel-urls`
4. **Nunca** deploy desde chats de copy/soluciones sin pasar por Principal.
5. **Al terminar sesión:** commit descriptivo + actualizar sección "Hecho / Pendiente" abajo.

---

## Mensaje de arranque (copiar en cualquier agente)

```
Lee PROJECT-STATUS.md y BACKLOG.md en la raíz del repo antes de actuar.
Producción: main @ 8dd870a. Sigue el protocolo de roles y no hagas deploy salvo que seas Principal.
Mi tarea de hoy: [DESCRIBE AQUÍ]
```

---

## Backlog — hecho vs pendiente

Detalle completo en **`BACKLOG.md`**. Resumen:

### ✅ Hecho (ya en producción `main`)

- [x] **P0** completo (Sprint 1 — `03fc5ce`)
- [x] **P1 parcial** (Sprint 2 — `863fecb`): mejoras copy en `project-1`, `project-3`, `project-4` (Aprendizajes P3/P4, puente narrativo, etc.)
- [x] Sync URLs Vercel (`8dd870a`)

### ✅ Hecho — sesión Soluciones/refinamiento (local `main`, sin desplegar)

- [x] **Soluciones** potenciadas en los 4 proyectos (sesiones previas).
- [x] **Refinamiento copy + coherencia de KPIs** completo en P1, P2, P3, P4:
  - P2 AppCres + spacing post-its (`4cc9b52`)
  - P1 ASSI — copy y relato del ANS (`9c1a87d`)
  - P4 TOM 3.0 — flecha KPI unificada + reorden Asignaciones (`2dd7d9a`, `5c97ff9`)
  - P3 Sepelio — pulido copy, KPIs verificados (`242897e`)
- [x] **P1-2** Recorte copy AppCres — cubierto dentro del refinamiento de P2.

### ⏳ Pendiente — orden recomendado

| Orden | ID | Tarea | Agente | Archivos |
|-------|-----|-------|--------|----------|
| 1 | **Deploy** | Push + deploy de `5c97ff9` (refinamiento P1–P4) + `sync:vercel-urls` | Principal | — |
| 2 | **P1-5** | About multi-cliente (no solo ASSI) | Backlog | `ui.ts` |
| 3 | **P2-1…P2-4** | Metadata header, secciones unificadas, glosario, meta SEO | Backlog | types + case studies |
| 4 | **P3** | Features producto (CV, sitemap, etc.) | Principal + backlog | — |

### 🔮 Agente Soluciones (plan paralelo al backlog)

Un chat, mismo prompt, **un proyecto por sesión** (no 4 agentes en paralelo):

1. `project_4` → 2. `project_3` → 3. `project_1` → 4. `project_2`

Reglas: solo texto, Product Designer visible, ES+EN, no inventar métricas.

---

## Acotaciones globales (todos los agentes)

- Rol visible: **Product Designer** (nunca "Senior" en UI).
- Calidad interna: criterio de nivel senior en análisis y copy.
- **No cambiar** layout: post-its, cards, galerías, imágenes.
- Solo editar strings en bloques existentes.

---

## Registro de sesiones

| Fecha | Agente | Commit | Notas |
|-------|--------|--------|-------|
| 2026-07-06 | Backlog | `03fc5ce` | Sprint 1 P0 en branch |
| 2026-07-07 | Backlog/Principal | `863fecb` | Sprint 2 P1 parcial → merge main |
| 2026-07-08 | Principal | `8dd870a` | Deploy + Vercel URL sync |
| 2026-07-08 | Soluciones | `5c97ff9` | Refinamiento copy + KPIs P1–P4 (local, sin desplegar) |
| | | | *(añadir fila al cerrar cada sesión)* |

---

## Qué decirle al Principal ahora

```
Deploy ya hecho en 8dd870a. Antes del próximo deploy:
1. Pull main
2. Revisar PROJECT-STATUS.md pendientes (P1-2, P1-5)
3. Trabajo nuevo en branch content/portfolio-copy-v3
4. Merge solo cuando Anny apruebe localhost
5. Tras deploy: npm run sync:vercel-urls
```
