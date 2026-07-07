import type { CaseStudy } from '../types';

const P = '/assets/projects/project_4';

export const project4CaseStudy: CaseStudy = {
  slug: 'project_4',
  meta: {
    title: {
      es: 'Gestión de horas y tareas — Anny Mamani',
      en: 'Time & task management — Anny Mamani',
    },
    description: {
      es: 'Pacífico Seguros — TOM 3.0 Gestión de horas y tareas',
      en: 'Pacífico Seguros — TOM 3.0 time and task management',
    },
  },
  header: {
    year: { es: '2025', en: '2025' },
    title: {
      es: 'Plataforma de gestión de horas y tareas (TOM 3.0)',
      en: 'Time and task management platform (TOM 3.0)',
    },
    subtitle: { es: 'Pacífico Seguros', en: 'Pacífico Seguros' },
    accent: '#0034ad',
  },
  blocks: [
    {
      type: 'heading',
      level: 2,
      text: { es: 'Overview', en: 'Overview' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'TOM 3.0, la plataforma de gestión de horas y tareas de Pacífico Seguros, enfrenta múltiples desafíos que afectan la productividad y experiencia de sus actuales usuarios.',
        en: 'TOM 3.0, Pacífico Seguros\' time and task management platform, faces multiple challenges affecting productivity and the experience of current users.',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Situación', en: 'Situation' },
    },
    {
      type: 'cards',
      variant: 'row3',
      items: [
        {
          title: {
            es: 'Inconsistencia en diseño y estructuración de contenido',
            en: 'Inconsistent design and content structure',
          },
          body: {
            es: '↑ Curva de aprendizaje, experiencia confusa.',
            en: '↑ Steep learning curve, confusing experience.',
          },
        },
        {
          title: { es: 'Ineficiencia operativa', en: 'Operational inefficiency' },
          body: {
            es: 'Tareas críticas requieren múltiples pasos que generan fricción.',
            en: 'Critical tasks require multiple steps that create friction.',
          },
        },
        {
          title: {
            es: 'Limitaciones de escalabilidad',
            en: 'Scalability limitations',
          },
          body: {
            es: 'Arquitectura actual no soporta funcionalidades futuras.',
            en: 'Current architecture does not support future functionality.',
          },
        },
      ],
    },
    {
      type: 'image',
      src: `${P}/plataforma-actual.jpg`,
      maxWidth: 1080,
      extraSpacingTop: 12,
      alt: {
        es: 'Capturas de la plataforma legacy: bandeja de registro de horas y formulario de colaborador',
        en: 'Legacy platform screenshots: hours registration queue and collaborator form',
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Challenge', en: 'Challenge' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Luego del primer kick off con stakeholders y auditar la actual plataforma pude establecer los siguientes objetivos de diseño alineados a los requerimientos de negocio:',
        en: 'After the first kickoff with stakeholders and auditing the current platform, I defined the following design objectives aligned with business requirements:',
      },
    },
    {
      type: 'cards',
      variant: 'row3',
      items: [
        {
          title: {
            es: 'Rediseñar la plataforma haciéndola escalable y consistente',
            en: 'Redesign the platform to be scalable and consistent',
          },
          body: {
            es: 'Mejorar significativamente la experiencia de gestión (↑ productividad).',
            en: 'Significantly improve the management experience (↑ productivity).',
          },
          postIt: {
            es: 'cómo: Experimentación con Figma Make',
            en: 'how: Experimentation with Figma Make',
          },
        },
        {
          title: {
            es: 'Reducir fricción en tareas críticas',
            en: 'Reduce friction in critical tasks',
          },
          body: {
            es: 'Módulos: Registro de horas, Asignaciones, Tarifas (⬇️ tiempo de llenado de campos de registro).',
            en: 'Modules: Hours registration, Assignments, Rates (⬇️ time to fill registration fields).',
          },
          postIt: {
            es: 'cómo: Dashboard dinámico: Drag & drop, referencia Jira',
            en: 'how: Dynamic dashboard: Drag & drop, Jira reference',
          },
        },
        {
          title: {
            es: 'Replantear la arquitectura de información',
            en: 'Rethink the information architecture',
          },
          body: {
            es: 'Soportar nuevas funcionalidades (onboarding, licencias, skills).',
            en: 'Support new functionality (onboarding, licenses, skills).',
          },
          postIt: {
            es: 'cómo: Card Sorting (cerrado) con Optimal Workshop',
            en: 'how: Closed card sorting with Optimal Workshop',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Proceso', en: 'Process' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Por ser una plataforma ya en producción era necesario auditarla para mapear los features existentes; en paralelo investigué métricas que pudieran guiar mis decisiones de diseño aplicadas al dashboard de gestión (aún no teníamos números oficiales con los cuales contrastar, pero sí se tenía proyectado desarrollar un dashboard de reportes).',
        en: 'As a platform already in production, it needed to be audited to map existing features; in parallel I researched metrics to guide design decisions for the management dashboard (we did not yet have official numbers to benchmark against, but a reporting dashboard was planned).',
      },
    },
    {
      type: 'discoveryFlow',
      title: { es: 'Research & Discovery', en: 'Research & Discovery' },
      columns: [
        {
          title: { es: 'Auditoría de interfaz actual', en: 'Current interface audit' },
          body: {
            es: 'La plataforma tenía módulos en ambientes de certificación y producción',
            en: 'The platform had modules in certification and production environments',
          },
          findingsLabel: { es: 'FINDINGS', en: 'FINDINGS' },
          findings: {
            es: [
              'Navegación compleja con jerarquías poco claras',
              'Elementos visuales inconsistentes (tipografía, colores, espaciados)',
              'Falta de feedback visual en acciones críticas',
              'Procesos fragmentados',
            ],
            en: [
              'Complex navigation with unclear hierarchies',
              'Inconsistent visual elements (typography, colors, spacing)',
              'Lack of visual feedback on critical actions',
              'Fragmented processes',
            ],
          },
        },
        {
          title: {
            es: 'Entrevistas con usuarios y stakeholders',
            en: 'User and stakeholder interviews',
          },
          body: {
            es: 'Varios perfiles gestionan esta herramienta con diferentes permisos de visualización',
            en: 'Various profiles manage this tool with different viewing permissions',
          },
          findingsLabel: { es: 'FINDINGS', en: 'FINDINGS' },
          findings: {
            es: [
              'Dificultad para obtener visión general de los equipos',
              'Registro de horas y tareas tedioso y poco intuitivo',
              'Admins necesitaban mayor claridad en la visualización de cargas masivas',
            ],
            en: [
              'Difficulty getting an overview of teams',
              'Tedious and unintuitive hours and task registration',
              'Admins needed greater clarity in bulk load visualization',
            ],
          },
        },
        {
          title: { es: 'Establecer métricas*', en: 'Establish metrics*' },
          body: {
            es: 'como baseline para identificar puntos de fricción y establecer objetivos medibles',
            en: 'as a baseline to identify friction points and set measurable goals',
          },
          findings: {
            es: [
              'Time to Complete (TTC) (⬇️ tiempo de llenado)',
              'Task Success Rate (TSR) (⬆️ % gestión en módulo de Asignaciones)',
              'Error Rate (⬇️ % de error al evitar data incorrecta o duplicada)',
            ],
            en: [
              'Time to Complete (TTC) (⬇️ fill time)',
              'Task Success Rate (TSR) (⬆️ % management in Assignments module)',
              'Error Rate (⬇️ % error by avoiding incorrect or duplicate data)',
            ],
          },
          footnote: {
            es: '*aún no manejaban métricas reales, pero éstas me sirvieron para justificar las decisiones de diseño y alimentar el módulo de Reportería posterior',
            en: '*they did not yet manage real metrics, but these helped me justify design decisions and feed the subsequent Reporting module',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Solución', en: 'Solution' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Luego del research y las reuniones con los usuarios de la plataforma pude reconocer que valoraban más dashboards informativos sobre menús rebuscados y profundos, y que necesitaban acceder rápidamente a tareas frecuentes. Bajo estas necesidades basé los features en el menú lateral, los filtros de búsqueda y la posterior experimentación usando Figma Make para el Módulo de Asignaciones.',
        en: 'After research and meetings with platform users, I found they valued informative dashboards over convoluted, deep menus and needed quick access to frequent tasks. Based on these needs, I focused on the sidebar menu, search filters, and Figma Make experimentation for the Assignments module.',
      },
    },
    {
      type: 'image',
      src: `${P}/solucion-preview.jpg`,
      maxWidth: 1080,
      alt: {
        es: 'Pantallas del módulo de Asignaciones con filtros avanzados y tabla de colaboradores',
        en: 'Assignments module screens with advanced filters and collaborator table',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Módulo de Asignaciones — Dashboard dinámico',
        en: 'Assignments module — Dynamic dashboard',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Vista de alto nivel con distribución de carga de trabajo por Squads según el trimestre.',
          'Cards con iniciativas actualizadas (nombre, estado, porcentaje).',
          'Filtros avanzados y quick actions para tareas frecuentes.',
          'Drag & drop para reasignación rápida.',
          'Indicadores visuales de estado y capacidad requerida.',
        ],
        en: [
          'High-level view with workload distribution by Squads per quarter.',
          'Cards with updated initiatives (name, status, percentage).',
          'Advanced filters and quick actions for frequent tasks.',
          'Drag & drop for quick reassignment.',
          'Visual indicators for status and required capacity.',
        ],
      },
    },
    {
      type: 'image',
      src: `${P}/asignaciones-dashboard.jpg`,
      maxWidth: 1080,
      alt: {
        es: 'Dashboard dinámico de Asignaciones con drag & drop y distribución de carga por squad',
        en: 'Dynamic Assignments dashboard with drag & drop and workload distribution by squad',
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Resultados', en: 'Outcomes' },
    },
    {
      type: 'list',
      items: {
        es: [
          'Dashboard de Asignaciones con vista de carga por Squad, filtros avanzados y drag & drop.',
          'Menú lateral y quick actions priorizados según tareas frecuentes de usuarios.',
          'Arquitectura replanteada para escalar onboarding, licencias y skills.',
          'Métricas TTC, TSR y Error Rate definidas como baseline para decisiones de diseño.',
        ],
        en: [
          'Assignments dashboard with Squad workload view, advanced filters, and drag & drop.',
          'Sidebar and quick actions prioritized based on users\' frequent tasks.',
          'Information architecture reworked to scale onboarding, licenses, and skills.',
          'TTC, TSR, and Error Rate metrics defined as a baseline for design decisions.',
        ],
      },
    },
  ],
  relatedSlugs: ['project_1', 'project_3'],
};
