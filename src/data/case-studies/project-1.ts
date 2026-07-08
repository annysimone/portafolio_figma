import type { CaseStudy } from '../types';

const P = '/assets/projects/project_1';

export const project1CaseStudy: CaseStudy = {
  slug: 'project_1',
  meta: {
    title: {
      es: 'ASSI. Interbank — Anny Mamani',
      en: 'ASSI. Interbank — Anny Mamani',
    },
    description: {
      es: 'Plataforma de venta de productos financieros — Interbank 2020-2024',
      en: 'Financial product sales platform — Interbank 2020-2024',
    },
  },
  header: {
    year: { es: '2020-2024', en: '2020-2024' },
    title: { es: 'ASSI. Interbank', en: 'ASSI. Interbank' },
    subtitle: {
      es: 'Plataforma de venta de productos financieros y bandejas de gestión interna',
      en: 'Financial product sales platform and internal management queues',
    },
    accent: '#6e660a',
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
        es: 'ASSI es una plataforma de ventas de nueva generación diseñada para revolucionar el proceso de ventas de productos de Interbank y reemplazar progresivamente su actual sistema ADQ. Ya tenía implementado algunos productos como Cuentas; mi labor se orientó a diseñar flujos más complejos como Tarjetas de Crédito, Préstamos Personales y Compra Deuda, que presentaban más casuísticas, escenarios de error y participación de perfiles de Riesgos.',
        en: 'ASSI is a next-generation sales platform designed to transform Interbank\'s product sales process and gradually replace its legacy ADQ system. Some products such as Accounts were already live; my work focused on designing more complex flows including Credit Cards, Personal Loans, and Debt Purchase, which involved more edge cases, error scenarios, and Risk team involvement.',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Analicé varios flujos digitales de la plataforma y detecté 3 puntos de dolor transversales (además de los propios de cada proceso).',
        en: 'I analyzed several of the platform\'s digital flows and identified three cross-cutting pain points (on top of each process\'s own).',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Situación', en: 'Situation' },
    },
    {
      type: 'cards',
      items: [
        {
          title: { es: 'ANS elevado (12-15 min)', en: 'High ANS (12-15 min)' },
          body: {
            es: '(Acuerdo de Nivel de Servicio) Tiempo promedio por transacción en flujos complejos (PP, TC, Compra Deuda); influye en el costo operativo por ejecutivo de venta.',
            en: '(Service Level Agreement) Average time per transaction in complex flows (PL, CC, Debt Purchase); impacts operating cost per sales rep.',
          },
        },
        {
          title: { es: 'Limitados flujos de venta', en: 'Limited sales flows' },
          body: {
            es: 'Disminuyendo la capacidad de venta de productos. Los asesores recurren a la plataforma existente (ADQ), más lenta.',
            en: 'Reducing product sales capacity. Advisors fall back to the existing ADQ platform, which is slower.',
          },
        },
        {
          title: { es: 'Falta de consistencia visual', en: 'Lack of visual consistency' },
          body: {
            es: 'Creando navegación confusa y sobrecarga cognitiva.',
            en: 'Creating confusing navigation and cognitive overload.',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Impacto', en: 'Impact' },
    },
    {
      type: 'cards',
      variant: 'impact',
      items: [
        {
          title: {
            es: 'Dificultad de cumplir metas comerciales',
            en: 'Difficulty meeting commercial goals',
          },
          body: {
            es: 'Por ineficiencia del sistema y no estar habilitados todos los productos para vender.',
            en: 'Due to system inefficiency and not all products being enabled for sale.',
          },
        },
        {
          title: {
            es: 'Experiencia de cliente deteriorada',
            en: 'Deteriorated client experience',
          },
          body: {
            es: 'Plataforma lenta y múltiples bandejas.',
            en: 'Slow platform and multiple management queues.',
          },
        },
        {
          title: { es: 'Pérdida de productividad', en: 'Loss of productivity' },
          body: {
            es: 'Tiempo elevado por transacción.',
            en: 'High time per transaction.',
          },
        },
        {
          title: {
            es: 'ANS debajo de objetivo corporativo',
            en: 'ANS below corporate target',
          },
          body: {
            es: '(meta corporativa: 6–8 min) — lo que se traducía en ineficiencia operacional.',
            en: '(corporate target: 6–8 min) — which translated into operational inefficiency.',
          },
        },
      ],
    },
    {
      type: 'paragraph',
      text: {
        es: 'Por la complejidad del rubro y el entendimiento de las integraciones tecnológicas necesarias para plantear propuestas de mejora, mapeé mis labores en tres fases: Think (Discovery estratégico), Make (Diseño de soluciones) y Check (Validación y optimización).',
        en: 'Given banking complexity and the technology integrations required to propose improvements, I mapped my work into three phases: Think (strategic discovery), Make (solution design), and Check (validation and optimization).',
      },
    },
    {
      type: 'phases',
      items: [
        {
          title: { es: 'Think', en: 'Think' },
          subtitle: {
            es: 'Discovery estratégico',
            en: 'Strategic discovery',
          },
          accent: '#5f00ad',
          items: {
            es: [
              'Entendimiento del rubro',
              'Perfiles de usuario',
              'Mapeo de la arquitectura actual',
              'Análisis de mapas de procesos funcionales',
            ],
            en: [
              'Industry understanding',
              'User profiles',
              'Current architecture mapping',
              'Functional process map analysis',
            ],
          },
        },
        {
          title: { es: 'Make', en: 'Make' },
          subtitle: {
            es: 'Diseño de soluciones',
            en: 'Solution design',
          },
          accent: '#6e660a',
          items: {
            es: [
              'How might we?',
              'Features de diseño',
              'Validación técnica',
              'Wireframing y prototipado',
              'Diseño de interfaz',
              'Testing, análisis e iteración',
              'Workshop con producto y usuarios',
            ],
            en: [
              'How might we?',
              'Design features',
              'Technical validation',
              'Wireframing and prototyping',
              'Interface design',
              'Testing, analysis, and iteration',
              'Workshops with product and users',
            ],
          },
        },
        {
          title: { es: 'Check', en: 'Check' },
          subtitle: {
            es: 'Validación y optimización',
            en: 'Validation and optimization',
          },
          accent: '#0034ad',
          items: {
            es: ['Handoff', 'Iteración', 'QA visual'],
            en: ['Handoff', 'Iteration', 'Visual QA'],
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'THINK', en: 'THINK' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'En esta fase me enfoqué en:',
        en: 'In this phase I focused on:',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Identificar los diferentes perfiles de usuarios, estaciones del proceso de venta de los diferentes productos y otras bandejas de gestión interna.',
          'Establecer objetivos generales y específicos para guiar mi accionar como UX/UI (aplicar las Heurísticas de Nielsen ayudó mucho).',
        ],
        en: [
          'Identifying user profiles, sales process stations for different products, and other internal management queues.',
          'Setting general and specific objectives to guide my UX/UI work (Nielsen\'s heuristics were especially helpful).',
        ],
      },
    },
    {
      type: 'image',
      src: `${P}/Objetivosux.jpg`,
      widthReduce: 300,
      alt: {
        es: 'Objetivo general y objetivos específicos de UX para ASSI',
        en: 'General and specific UX objectives for ASSI',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Establecer 3 pilares estratégicos sobre los cuáles generaría un impacto real con cada propuesta:',
        ],
        en: [
          'Defining three strategic pillars that would drive real impact with every proposal:',
        ],
      },
    },
    {
      type: 'cards',
      variant: 'row3',
      items: [
        {
          title: { es: 'Usabilidad', en: 'Usability' },
          tint: '#F5C518',
          body: {
            es: 'Cumplimiento de objetivos y criterios de uso.',
            en: 'Meeting objectives and usability criteria.',
          },
        },
        {
          title: { es: 'Contenido', en: 'Content' },
          tint: '#1976D2',
          body: {
            es: 'Coherencia en la redacción y comunicación efectiva.',
            en: 'Consistency in copywriting and effective communication.',
          },
        },
        {
          title: { es: 'Look & Feel', en: 'Look & Feel' },
          tint: '#43A047',
          body: {
            es: 'Aplicación del Styleguide y mantener identidad de marca.',
            en: 'Applying the style guide and maintaining brand identity.',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'MAKE', en: 'MAKE' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'La colaboración continua con los Business Analysts fortaleció mis competencias en process mapping, historias de usuario y criterios de aceptación funcionales. Trabajar con el Product Owner y el equipo técnico profundizó mi comprensión de las reglas de negocio y las arquitecturas de integración.',
        en: 'Continuous collaboration with Business Analysts strengthened my skills in process mapping, user stories, and functional acceptance criteria. Working with the Product Owner and engineering team deepened my understanding of business rules and integration architecture.',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Con esa base traduje los requerimientos de negocio y las necesidades de usuario en features concretos para optimizar los procesos de venta en ASSI, usando el framework HMW para reformular las necesidades de los ejecutivos en preguntas accionables.',
        en: 'With that foundation, I translated business requirements and user needs into concrete features to optimize ASSI\'s sales processes, using the HMW framework to reframe executive needs as actionable questions.',
      },
    },
    {
      type: 'image',
      src: `${P}/hmw-features.jpg`,
      title: {
        es: 'User need → How might we → Features',
        en: 'User need → How might we → Features',
      },
      alt: {
        es: 'Tabla de necesidades de usuario, preguntas HMW y features propuestos',
        en: 'Table of user needs, HMW questions, and proposed features',
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'CHECK', en: 'CHECK' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'En Check cerré el ciclo con handoff estructurado a desarrollo, iteración sobre feedback de QA visual y validación de criterios de aceptación con BAs — asegurando que cada solución fuera implementable dentro de las reglas de negocio e integraciones de ASSI.',
        en: 'In Check I closed the loop with a structured handoff to development, iteration on visual QA feedback, and validation of acceptance criteria with BAs — ensuring each solution was implementable within ASSI\'s business rules and integrations.',
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Soluciones', en: 'Solutions' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Prioricé tres frentes para acercar los flujos complejos a la meta ANS corporativa (6–8 min): reducir la fricción en ventas complejas, habilitar productos sin regresar a ADQ y unificar usabilidad, contenido y look & feel. El rediseño proyecta pasar de 12–15 a ~9–10 min por transacción, conectando cada pain cross con una decisión de diseño concreta.',
        en: 'I prioritized three fronts to bring complex flows closer to the corporate ANS target (6–8 min): reduce friction in complex sales, enable products without falling back to ADQ, and unify usability, content, and look & feel. The redesign projects a drop from 12–15 to ~9–10 min per transaction, connecting each cross pain to a concrete design decision.',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Card Producto — Préstamos Personales',
        en: 'Product card — Personal loans',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Card post-calificación con estado claro — el ejecutivo sabe qué sigue sin re-trabajar la pantalla.',
          'Jerarquía visual entre productos — selección más rápida en el flujo de venta.',
          'CTAs optimizados para acortar pasos hacia el cierre — impacto directo en ANS.',
          'Diseño orientado a incrementar operaciones comerciales exitosas en Tiendas y Televentas.',
        ],
        en: [
          'Post-qualification card with clear status — the executive knows what comes next without reworking the screen.',
          'Visual hierarchy between products — faster selection in the sales flow.',
          'CTAs optimized to shorten steps toward close — direct impact on ANS.',
          'Design oriented toward increasing successful commercial operations in Stores and Telesales.',
        ],
      },
    },
    {
      type: 'image',
      src: `${P}/prestamos-personales.jpg`,
      title: {
        es: 'Préstamos Personales — problema, objetivos y solución',
        en: 'Personal loans — problem, objectives, and solution',
      },
      alt: {
        es: 'Comparativa de layout inicial y solución UI para Préstamos Personales en ASSI',
        en: 'Initial layout vs. UI solution for Personal Loans in ASSI',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Tarjetas de Crédito — flujos con Riesgos',
        en: 'Credit cards — flows with Risk involvement',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'UI para escenarios de calificación y error con participación del perfil de Riesgos — mayor casuística que Cuentas o Préstamos.',
          'Estados y mensajes claros en puntos de decisión — menos retrabajo del ejecutivo ante respuestas del sistema.',
          'Consistencia visual y de contenido alineada a los tres pilares (usabilidad, contenido, look & feel).',
        ],
        en: [
          'UI for qualification and error scenarios with Risk team involvement — more edge cases than Accounts or Personal Loans.',
          'Clear states and messages at decision points — less executive rework when the system responds.',
          'Visual and content consistency aligned to the three pillars (usability, content, look & feel).',
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Compra Deuda Ataque', en: 'Debt purchase flow' },
    },
    {
      type: 'list',
      items: {
        es: [
          'Flujo de venta con configuración de producto en menos pantallas — servicios asociados, emboce y entrega integrados.',
          'Campos relacionados agrupados y menos scroll — menos tiempo por transacción, más cerca de la meta ANS.',
          'Configuración de producto más legible para ejecutivos con alta rotación de casos.',
        ],
        en: [
          'Sales flow with product configuration in fewer screens — associated services, embossing, and delivery integrated.',
          'Related fields grouped with less scroll — less time per transaction, closer to the ANS target.',
          'More readable product configuration for executives handling high case volume.',
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Consulta y Seguimiento', en: 'Inquiry and tracking' },
    },
    {
      type: 'list',
      items: {
        es: [
          'Bandeja de gestión con acceso directo a tasas y comisiones — sin salir del flujo de consulta.',
          'Derivación de expedientes con modales informativos — contexto claro antes de escalar a otro perfil.',
          'Menos bandejas cruzadas — el ejecutivo resuelve más en un solo punto de gestión.',
        ],
        en: [
          'Management queue with direct access to rates and fees — without leaving the inquiry flow.',
          'Case forwarding through informative modals — clear context before escalating to another profile.',
          'Fewer cross-queue hops — the executive resolves more from a single management point.',
        ],
      },
    },
    {
      type: 'image',
      src: `${P}/compra-deuda-consulta.jpg`,
      maxWidth: 1080,
      title: {
        es: 'Compra Deuda Ataque y Consulta y Seguimiento',
        en: 'Debt purchase and inquiry & tracking',
      },
      alt: {
        es: 'Pantallas de Compra Deuda Ataque y bandeja Consulta y Seguimiento',
        en: 'Debt purchase screens and inquiry & tracking queue',
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
          'Flujos de Préstamos, Tarjetas de Crédito, Compra Deuda y Consulta rediseñados — proyección ~9–10 min por transacción (meta corporativa ANS: 6–8 min).',
          'Mayor volumen de operaciones comerciales exitosas — desembolsos, compra de deuda ejecutada y ventas con ingreso al banco — en Tiendas y Televentas.',
          'Menos scroll y campos agrupados en tareas críticas durante la gestión.',
          'Bandejas de gestión con acceso más directo a tasas, comisiones y derivación.',
          'Interacciones optimizadas para teclado, menos data entry y menos clics por transacción.',
        ],
        en: [
          'Personal Loans, Credit Cards, Debt Purchase, and Inquiry flows redesigned — ~9–10 min per transaction projection (corporate ANS target: 6–8 min).',
          'Higher volume of successful commercial operations — disbursements, executed debt purchases, and revenue-generating sales — in Stores and Telesales.',
          'Less scroll and grouped fields in critical tasks during handling.',
          'Management queues with more direct access to rates, fees, and case forwarding.',
          'Interactions optimized for keyboard use, less data entry, and fewer clicks per transaction.',
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
          'Profundizar en el ecosistema bancario y backoffice desde la perspectiva de los ejecutivos de venta.',
          'La colaboración cercana con desarrollo es clave para validar soluciones y acelerar la implementación.',
          'Aplicar rigurosidad analítica y funcional en cada decisión de diseño.',
          'Priorizar interacciones eficientes: más uso de teclado, menos ingreso manual de datos y menos clics.',
          'Cada mejora de UX impacta directamente en el ANS y la productividad de los ejecutivos de venta.',
          'Mantener alineación continua entre diseño y desarrollo durante todo el ciclo de entrega.',
        ],
        en: [
          'Deepen understanding of banking and back-office ecosystems from a sales executive perspective.',
          'Close collaboration with engineering is essential to validate solutions and accelerate implementation.',
          'Apply analytical and functional rigor to every design decision.',
          'Prioritize efficient interactions: more keyboard use, less manual data entry, and fewer clicks.',
          'Every UX improvement directly impacts ANS and sales executive productivity.',
          'Maintain continuous alignment between design and development throughout the delivery cycle.',
        ],
      },
    },
  ],
  relatedSlugs: ['project_4', 'project_3'],
};
