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
        es: 'Considerando este contexto, hice un análisis de varios flujos digitales en la plataforma, detectando 3 puntos de dolor cross (cada proceso tenía los propios).',
        en: 'In this context, I analyzed multiple digital flows on the platform and identified three cross-cutting pain points (each process had its own as well).',
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
          title: { es: '% ANS elevado (12-15 min)', en: 'High ANS (12-15 min)' },
          body: {
            es: '(Acuerdo de Nivel de Servicio) influyendo en el costo operativo por ejecutivo de venta.',
            en: '(Service Level Agreement) affecting operational cost per sales executive.',
          },
        },
        {
          title: { es: 'Limitados flujos de venta', en: 'Limited sales flows' },
          body: {
            es: 'Disminuyendo la capacidad de venta de productos. Asesores recurren a plataforma actual existente (ADQ) que es más lenta.',
            en: 'Reducing product sales capacity. Advisors fall back to the legacy ADQ platform, which is slower.',
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
            es: '(meta: 6-8 min) lo que se traducía en ineficiencia operacional.',
            en: '(target: 6-8 min) translating into operational inefficiency.',
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
              '¿How might we?',
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
        es: 'Por la colaboración estrecha y continua con los Business Analysts, desarrollé competencias especializadas en process mapping, redacción de Historias de usuario y definición de criterios de aceptación funcionales. La sinergia multidisciplinaria con el Product Owner y el equipo de desarrollo técnico permitió profundizar mi comprensión de las reglas de negocio y arquitecturas de integración tecnológica.',
        en: 'Through close collaboration with Business Analysts, I developed skills in process mapping, user story writing, and functional acceptance criteria. Working with the Product Owner and engineering team deepened my understanding of business rules and integration architecture.',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Todo esto me permitió traducir estratégicamente los requerimientos de negocio y necesidades de usuario en features específicos y diferenciados para optimizar los diversos procesos de venta de productos en ASSI, usando el framework HMW para reformular las necesidades de los ejecutivos en preguntas orientadas al desarrollo de features.',
        en: 'This allowed me to translate business requirements and user needs into specific, differentiated features to optimize ASSI\'s sales processes, using the HMW framework to reframe executive needs as feature-oriented questions.',
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
      text: { es: 'Soluciones', en: 'Solutions' },
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
          'Rediseño del card de producto para clarificar el estado post-calificación',
          'Mejorar la jerarquía visual entre productos',
          'Optimizar los CTA para agilizar el ANS',
          'Aumentar desembolsos por canal Tiendas y Televentas',
        ],
        en: [
          'Redesign the product card to clarify post-qualification status',
          'Improve visual hierarchy between products',
          'Optimize CTAs to speed up ANS',
          'Increase disbursements through Stores and Telesales channels',
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
      text: { es: 'Compra Deuda Ataque', en: 'Debt purchase flow' },
    },
    {
      type: 'list',
      items: {
        es: [
          'Flujo de venta con configuración de producto',
          'Servicios asociados, emboce y entrega de tarjeta',
          'Reducir scroll y agrupar campos relacionados',
        ],
        en: [
          'Sales flow with product configuration',
          'Associated services, card embossing and delivery',
          'Reduce scroll and group related fields',
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
          'Bandeja de gestión con acceso rápido a tasas y comisiones',
          'Derivación de expedientes mediante modales informativos',
        ],
        en: [
          'Management queue with quick access to rates and fees',
          'Case forwarding through informative modals',
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
          'Flujos de Préstamos, Compra Deuda y Consulta rediseñados hacia la meta ANS de 6–8 min.',
          'Menos scroll y campos agrupados en tareas críticas de venta.',
          'Bandejas de gestión con acceso más directo a tasas, comisiones y derivación.',
          'Interacciones optimizadas para teclado, menos data entry y menos clics por transacción.',
        ],
        en: [
          'Personal Loans, Debt Purchase, and Inquiry flows redesigned toward the 6–8 min ANS target.',
          'Less scroll and grouped fields in critical sales tasks.',
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
