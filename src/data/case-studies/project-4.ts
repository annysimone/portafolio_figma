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
      es: 'Rediseño de TOM 3.0, plataforma interna de gestión de horas y tareas de Pacífico: registro más ágil y guiado, con vistas claras de carga por equipo.',
      en: 'Redesign of TOM 3.0, Pacífico\'s internal time- and task-management platform: faster, guided time tracking with clear team-workload views.',
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
            es: 'Módulos: Registro de horas, Asignaciones, Tarifas (↓ tiempo de llenado de campos de registro).',
            en: 'Modules: Hours registration, Assignments, Rates (↓ time to fill registration fields).',
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
        es: 'Por ser una plataforma ya en producción, la audité para mapear features y flujos reales; en paralelo definí métricas de diseño como baseline para guiar priorización — sin números históricos con los que contrastar.',
        en: 'As a platform already in production, I audited it to map real features and flows; in parallel I defined design metrics as a baseline to guide prioritization — with no historical numbers to benchmark against.',
      },
    },
    {
      type: 'discoveryFlow',
      title: { es: 'Research & Discovery', en: 'Research & Discovery' },
      columns: [
        {
          title: { es: 'Auditoría de interfaz actual', en: 'Current interface audit' },
          body: {
            es: 'Recorrí módulos en certificación y producción para mapear flujos, patrones visuales y fricción antes de proponer cambios.',
            en: 'I walked through modules in certification and production to map flows, visual patterns, and friction before proposing changes.',
          },
          findingsLabel: { es: 'FINDINGS', en: 'FINDINGS' },
          findings: {
            es: [
              'Navegación profunda con jerarquías poco claras — pérdida de contexto entre módulos',
              'Inconsistencia visual (tipografía, color, espaciado)',
              'Falta de feedback visual en acciones críticas',
              'Procesos fragmentados para tareas recurrentes',
            ],
            en: [
              'Deep navigation with unclear hierarchies — loss of context between modules',
              'Visual inconsistency (typography, color, spacing)',
              'Lack of visual feedback on critical actions',
              'Fragmented processes for recurring tasks',
            ],
          },
        },
        {
          title: {
            es: 'Entrevistas con usuarios y stakeholders',
            en: 'User and stakeholder interviews',
          },
          body: {
            es: 'Entrevisté admins, líderes y usuarios operativos con distintos permisos para entender cómo gestionan carga y registro diario.',
            en: 'I interviewed admins, leads, and operational users with different permissions to understand how they manage workload and daily registration.',
          },
          findingsLabel: { es: 'FINDINGS', en: 'FINDINGS' },
          findings: {
            es: [
              'Sin vista consolidada de equipos — difícil evaluar distribución de carga por Squad',
              'Registro de horas percibido como tedioso y poco intuitivo',
              'Admins requerían mayor claridad al revisar cargas masivas y reasignaciones',
            ],
            en: [
              'No consolidated team view — hard to assess workload distribution by Squad',
              'Hours registration perceived as tedious and unintuitive',
              'Admins needed greater clarity when reviewing bulk loads and reassignments',
            ],
          },
        },
        {
          title: { es: 'Métricas de diseño*', en: 'Design metrics*' },
          body: {
            es: 'Indicadores como baseline para priorizar fricción y evaluar propuestas — sin datos históricos en la plataforma.',
            en: 'Indicators as a baseline to prioritize friction and evaluate proposals — with no historical data on the platform.',
          },
          findings: {
            es: [
              'Time to Complete (TTC) — reducir tiempo de llenado en Registro y Tarifas',
              'Task Success Rate (TSR) — completar gestión en Asignaciones sin salir del módulo',
              'Error Rate — prevenir data duplicada o incorrecta en registros masivos',
            ],
            en: [
              'Time to Complete (TTC) — reduce fill time in Registration and Rates',
              'Task Success Rate (TSR) — complete management in Assignments without leaving the module',
              'Error Rate — prevent duplicate or incorrect data in bulk registrations',
            ],
          },
          footnote: {
            es: '*No existían métricas oficiales; estos indicadores guiaron la priorización y validación de decisiones de diseño.',
            en: '*No official metrics existed; these indicators guided prioritization and validation of design decisions.',
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
        es: 'La respuesta de diseño apuntó a convertir TOM 3.0 en una plataforma de gestión visible: dashboards accionables en lugar de menús profundos, tareas frecuentes al alcance inmediato y una arquitectura preparada para escalar. Replanteé la navegación lateral y la IA con card sorting; sobre esa base, rediseñé Registro de horas y Tarifas para reducir fricción en captura y consulta, y concentré la innovación de interacción en Asignaciones — el módulo donde la visión de carga por Squad requería un salto cualitativo.',
        en: 'The design response aimed to turn TOM 3.0 into a visible management platform: actionable dashboards instead of deep menus, frequent tasks within immediate reach, and architecture ready to scale. I reworked the sidebar and information architecture through card sorting; on that foundation, I redesigned Hours registration and Rates to reduce friction in data entry and lookup, and focused interaction innovation on Assignments — the module where Squad workload visibility required a qualitative leap.',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Registro de horas — menos pasos, más claridad',
        en: 'Hours registration — fewer steps, clearer flow',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Bandeja de registro con jerarquía visual más clara y feedback en acciones críticas.',
          'Formulario de colaborador con campos agrupados por contexto, orientado a reducir tiempo de llenado.',
          'Consistencia tipográfica y de espaciado alineada al nuevo sistema de diseño.',
        ],
        en: [
          'Registration queue with clearer visual hierarchy and feedback on critical actions.',
          'Collaborator form with fields grouped by context, oriented toward reduced fill time.',
          'Typographic and spacing consistency aligned to the new design system.',
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Tarifas — consulta y gestión simplificada',
        en: 'Rates — simplified lookup and management',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Acceso más directo a tarifas desde la navegación replanteada, sin recorridos innecesarios.',
          'Estructura de contenido consistente con el resto de módulos para bajar la curva de aprendizaje.',
          'Formularios orientados a minimizar data entry en tareas repetitivas de administración.',
        ],
        en: [
          'More direct rate access from the reworked navigation, without unnecessary paths.',
          'Content structure consistent with other modules to lower the learning curve.',
          'Forms oriented toward minimizing data entry in repetitive admin tasks.',
        ],
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
        es: 'Asignaciones — Dashboard dinámico',
        en: 'Assignments — Dynamic dashboard',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Aquí apliqué la mayor innovación: un dashboard de alto nivel inspirado en patrones de gestión ágil (referencia Jira), prototipado e iterado con Figma Make para validar drag & drop, filtros y distribución de carga antes del handoff.',
        en: 'This is where I applied the greatest innovation: a high-level dashboard inspired by agile management patterns (Jira reference), prototyped and iterated with Figma Make to validate drag & drop, filters, and workload distribution before handoff.',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Vista de carga de trabajo por Squads según trimestre — visibilidad operativa sin salir del módulo.',
          'Cards de iniciativas con estado y avance (%), actualizadas en contexto.',
          'Filtros avanzados y quick actions para las tareas más frecuentes de admins y líderes.',
          'Drag & drop para reasignación rápida entre colaboradores e iniciativas.',
          'Indicadores visuales de estado y capacidad requerida por squad.',
        ],
        en: [
          'Workload view by Squads per quarter — operational visibility without leaving the module.',
          'Initiative cards with status and progress (%), updated in context.',
          'Advanced filters and quick actions for admins\' and leads\' most frequent tasks.',
          'Drag & drop for quick reassignment between collaborators and initiatives.',
          'Visual indicators of status and required capacity per squad.',
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
          'Dashboard de Asignaciones entregado con vista de carga por Squad, filtros avanzados y drag & drop — listo para desarrollo.',
          'Registro de horas y Tarifas rediseñados hacia menor fricción en captura y consulta, alineados al nuevo sistema visual.',
          'Menú lateral y quick actions priorizados según tareas frecuentes identificadas en entrevistas.',
          'Arquitectura replanteada para escalar onboarding, licencias y skills sin rediseño estructural.',
          'Métricas TTC, TSR y Error Rate definidas como baseline para priorizar y validar decisiones de diseño.',
        ],
        en: [
          'Assignments dashboard delivered with Squad workload view, advanced filters, and drag & drop — ready for development.',
          'Hours registration and Rates redesigned toward lower friction in data entry and lookup, aligned to the new visual system.',
          'Sidebar and quick actions prioritized based on frequent tasks identified in interviews.',
          'Information architecture reworked to scale onboarding, licenses, and skills without structural redesign.',
          'TTC, TSR, and Error Rate metrics defined as a baseline to prioritize and validate design decisions.',
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Aprendizajes', en: 'Learnings' },
    },
    {
      type: 'list',
      ordered: true,
      items: {
        es: [
          'En plataformas legacy en producción, auditar antes de proponer evita rediseños desconectados del uso real.',
          'Los usuarios operativos priorizan visibilidad de carga sobre navegación profunda — los dashboards resuelven mejor que los menús.',
          'Card sorting cerrado fue clave para justificar una IA escalable sin sobre-ingeniería de categorías.',
          'Figma Make aceleró la validación de interacciones complejas (drag & drop, filtros) antes del handoff técnico.',
          'Sin métricas oficiales, TTC, TSR y Error Rate como baseline orientaron qué módulos y flujos priorizar en el rediseño.',
        ],
        en: [
          'On legacy production platforms, auditing before proposing prevents redesigns disconnected from real usage.',
          'Operational users prioritize workload visibility over deep navigation — dashboards solve better than menus.',
          'Closed card sorting was key to justifying scalable IA without over-engineering categories.',
          'Figma Make accelerated validation of complex interactions (drag & drop, filters) before technical handoff.',
          'Without official metrics, TTC, TSR, and Error Rate as a baseline guided which modules and flows to prioritize in the redesign.',
        ],
      },
    },
  ],
  relatedSlugs: ['project_1', 'project_3'],
};
