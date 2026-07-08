import type { CaseStudy } from '../types';

const P = '/assets/projects/project_2';

export const project2CaseStudy: CaseStudy = {
  slug: 'project_2',
  meta: {
    title: {
      es: 'AppCres — Anny Mamani',
      en: 'AppCres — Anny Mamani',
    },
    description: {
      es: 'Plataforma de gestión de inversiones — AppCres 2019',
      en: 'Investment management platform — AppCres 2019',
    },
  },
  header: {
    year: { es: '2019', en: '2019' },
    title: {
      es: 'AppCres. Plataforma de gestión de inversiones',
      en: 'AppCres. Investment management platform',
    },
    subtitle: {
      es: 'Gestión, financiamiento y alternativas de inversión online en el mercado de capitales.',
      en: 'Management, financing, and online investment alternatives in the capital markets.',
    },
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
        es: 'ACRES Sociedad Agente de Bolsa (ACRES SAB), del grupo ACRES Finance, ofrece financiamiento e inversión en el mercado de capitales, pero su modelo operativo obsoleto limitaba la escalabilidad del negocio.',
        en: 'ACRES Sociedad Agente de Bolsa (ACRES SAB), part of ACRES Finance, offers financing and investment in the capital markets, but its outdated operating model limited the business\'s scalability.',
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Challenge', en: 'Challenge' },
    },
    {
      type: 'cards',
      variant: 'postitsRef',
      items: [
        {
          title: { es: 'Proceso manual intensivo', en: 'Intensive manual process' },
          body: {
            es: 'Contratos físicos, comunicación telefónica y presencial, órdenes firmadas.',
            en: 'Physical contracts, phone and in-person communication, signed orders.',
          },
        },
        {
          title: { es: 'Barrera de entrada alta', en: 'High barrier to entry' },
          body: {
            es: 'Onboarding complejo que desalentaba nuevos inversores.',
            en: 'Complex onboarding that discouraged new investors.',
          },
        },
        {
          title: { es: 'Dependencia de intermediarios', en: 'Dependence on intermediaries' },
          body: {
            es: 'Gestión indirecta de inversiones.',
            en: 'Indirect investment management.',
          },
        },
        {
          title: { es: 'Falta de transparencia', en: 'Lack of transparency' },
          body: {
            es: 'Información limitada de transacciones.',
            en: 'Limited transaction information.',
          },
        },
      ],
    },
    {
      type: 'paragraph',
      text: {
        es: 'Bajo este contexto, se detectaron las siguientes oportunidades estratégicas:',
        en: 'In this context, the following strategic opportunities were identified:',
      },
    },
    {
      type: 'cards',
      variant: 'postitsRef',
      postitsTheme: 'impact',
      items: [
        {
          title: {
            es: 'Capturar el segmento de inversores digitales emergentes',
            en: 'Capture the emerging digital investor segment',
          },
          body: {
            es: 'Web pública · Calculadora de inversión · Acceso a productos.',
            en: 'Public website · Investment calculator · Product access.',
          },
        },
        {
          title: {
            es: 'Reducir costos operativos mediante automatización',
            en: 'Reduce operating costs through automation',
          },
          body: {
            es: 'Digitalización del Contrato de Intermediación · Plataforma de inversión · Onboarding.',
            en: 'Brokerage agreement digitization · Investment platform · Onboarding.',
          },
        },
        {
          title: {
            es: 'Diferenciarse competitivamente en el mercado peruano',
            en: 'Differentiate competitively in the Peruvian market',
          },
          body: {
            es: 'Seguimiento de inversiones · Operaciones · Firma digital mediante app · Regulación y transparencia.',
            en: 'Investment tracking · Operations · Digital signature via app · Regulation and transparency.',
          },
          tint: '#43A047',
        },
      ],
    },
    {
      type: 'paragraph',
      text: {
        es: 'Más allá de captar clientes, era clave darles seguridad y eficiencia transaccional. La propuesta de valor se enfocó en:',
        en: 'Beyond acquiring clients, security and transactional efficiency were key. The value proposition focused on:',
      },
    },
    {
      type: 'image',
      src: `${P}/propuesta-valor.jpg`,
      maxWidth: 320,
      alt: {
        es: 'Tarjeta con la propuesta de valor central del proyecto AppCres',
        en: 'Card with the core value proposition for the AppCres project',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Al ser un producto y rubro nuevos para mí, apliqué el Doble Diamante adaptado al proyecto, en 4 etapas: Descubrir, Analizar, Diseñar y Entregar.',
        en: 'As the product and industry were new to me, I applied the Double Diamond adapted to the project, across four stages: Discover, Analyze, Design, and Deliver.',
      },
    },
    {
      type: 'phases',
      items: [
        {
          title: { es: 'Descubrir', en: 'Discover' },
          subtitle: { es: 'Research · Business analysis · Process Mapping', en: 'Research · Business analysis · Process Mapping' },
          accent: '#5f00ad',
          items: {
            es: ['Research', 'Business analysis', 'Process Mapping'],
            en: ['Research', 'Business analysis', 'Process Mapping'],
          },
        },
        {
          title: { es: 'Analizar', en: 'Analyze' },
          subtitle: {
            es: 'Persona · Empathy map · JTBD · HMW',
            en: 'Persona · Empathy map · JTBD · HMW',
          },
          accent: '#6e660a',
          items: {
            es: [
              'Planeamiento de investigación',
              'User persona',
              'Empathy map',
              'Hallazgos e insights',
              'Jobs to be done',
              'How Might We',
              'Features de diseño',
            ],
            en: [
              'Research planning',
              'User persona',
              'Empathy map',
              'Findings and insights',
              'Jobs to be done',
              'How Might We',
              'Design features',
            ],
          },
        },
        {
          title: { es: 'Diseñar', en: 'Design' },
          subtitle: {
            es: 'IA · Wireframes · User flow · UI',
            en: 'IA · Wireframes · User flow · UI',
          },
          accent: '#9b51e0',
          items: {
            es: [
              'Arquitectura de información',
              'Wireframes',
              'User flow',
              'Iteración',
              'Diseño de interfaz',
            ],
            en: [
              'Information architecture',
              'Wireframes',
              'User flow',
              'Iteration',
              'Interface design',
            ],
          },
        },
        {
          title: { es: 'Entregar', en: 'Deliver' },
          subtitle: {
            es: 'Validación técnica · Aprendizajes',
            en: 'Technical validation · Learnings',
          },
          accent: '#0034ad',
          items: {
            es: ['Validación técnica', 'Aprendizajes'],
            en: ['Technical validation', 'Learnings'],
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'DESCUBRIR', en: 'DISCOVER' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Con la documentación y reuniones con PO, LT y stakeholders, armé un diagrama de procesos para entender el ecosistema de la plataforma y su integración con la web pública. La complejidad estaba en las validaciones técnicas e integraciones con APIs internas y de terceros.',
        en: 'From documentation and meetings with the PO, tech lead, and stakeholders, I built a process diagram to understand the platform ecosystem and its integration with the public website. Complexity lay in technical validations and integrations with internal and third-party APIs.',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'En esta fase pude lograr:',
        en: 'In this phase I was able to achieve:',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Comprensión integral del producto y su complejidad.',
          'Entendimiento del proceso de afiliación y registro de nuevos inversores.',
          'Validaciones de identidad y protocolos de seguridad, con sus implicancias técnicas y operativas.',
          'Trazabilidad completa de funcionalidades y servicios de la plataforma.',
        ],
        en: [
          'Full understanding of the product and its complexity.',
          'Understanding of the affiliation and new-investor registration process.',
          'Identity validations and security protocols, with technical and operational implications.',
          'Complete traceability of platform features and services.',
        ],
      },
    },
    {
      type: 'gallery',
      title: { es: 'Documentación y mapeo de procesos', en: 'Documentation and process mapping' },
      layout: 'carousel',
      images: [
        {
          src: `${P}/documentacion-wireframes.jpg`,
          alt: {
            es: 'Wireframes impresos y documento de público objetivo del proyecto Acres',
            en: 'Printed wireframes and target audience document for the Acres project',
          },
          caption: {
            es: 'Wireframes y definición de público objetivo',
            en: 'Wireframes and target audience definition',
          },
        },
        {
          src: `${P}/diagrama-procesos.jpg`,
          alt: {
            es: 'Diagrama de flujo del proceso de afiliación ACRES SAB en cuatro etapas',
            en: 'Four-stage ACRES SAB affiliation process flow diagram',
          },
          caption: {
            es: 'Diagrama de procesos — afiliación e integración',
            en: 'Process diagram — affiliation and integration',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'ANALIZAR', en: 'ANALYZE' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Ser inversor activo exigía procedimientos y validaciones de identidad que podían abrumar al usuario. Usé artefactos de UX para detectar touchpoints de fricción, pains de inversión y oportunidades de mejora.',
        en: 'Becoming an active investor required procedures and identity validations that could overwhelm users. I used UX artifacts to identify friction touchpoints, investment pains, and improvement opportunities.',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Research planning', en: 'Research planning' },
    },
    {
      type: 'heading',
      level: 4,
      text: { es: 'Objetivo general', en: 'General objective' },
    },
    {
      type: 'cards',
      items: [
        {
          body: {
            es: 'Conocer la problemática que rodea a las personas que quieren invertir en el mercado de valores.',
            en: 'Understand the problems surrounding people who want to invest in the stock market.',
          },
          fill: 'yellow',
        },
      ],
    },
    {
      type: 'heading',
      level: 4,
      text: { es: 'Objetivos específicos', en: 'Specific objectives' },
    },
    {
      type: 'cards',
      variant: 'row3',
      items: [
        {
          title: { es: 'Disponibilidad y decisión', en: 'Availability and decision' },
          body: {
            es: 'Conocer la disponibilidad y decisión de invertir de las personas bancarizadas.',
            en: 'Understand banked individuals\' availability and decision to invest.',
          },
        },
        {
          title: { es: 'Conocimiento bursátil', en: 'Market knowledge' },
          body: {
            es: 'Profundizar en el conocimiento que tienen del rubro bursátil y de valores.',
            en: 'Deepen understanding of their stock and securities market knowledge.',
          },
        },
        {
          title: { es: 'Plataformas de inversión', en: 'Investment platforms' },
          body: {
            es: 'Establecer qué tanto conocen de plataformas y/o apps para invertir.',
            en: 'Establish how much they know about investment platforms and apps.',
          },
        },
      ],
    },
    {
      type: 'gallery',
      title: { es: 'Investigación cualitativa', en: 'Qualitative research' },
      layout: 'carousel',
      images: [
        {
          src: `${P}/docs-investigacion.jpg`,
          alt: {
            es: 'Plantillas de planeamiento, brief de reclutamiento y guía de entrevista',
            en: 'Research planning templates, recruitment brief, and interview guide',
          },
          caption: {
            es: 'Brief y guía de entrevistas',
            en: 'Recruitment brief and interview guide',
          },
        },
        {
          src: `${P}/campo-entrevistas.jpg`,
          alt: {
            es: 'Síntesis de entrevistas en profundidad — Download de Campo',
            en: 'In-depth interview synthesis — field research notes',
          },
          caption: { es: 'Download de Campo', en: 'Field research notes' },
        },
        {
          src: `${P}/user-persona.jpg`,
          alt: {
            es: 'User persona Luis Gonzales Castro — inversor de 36 años',
            en: 'User persona Luis Gonzales Castro — 36-year-old investor',
          },
          caption: { es: 'User persona', en: 'User persona' },
        },
        {
          src: `${P}/empathy-map.jpg`,
          alt: {
            es: 'Mapa de empatía con pains, gains y touchpoints del inversor',
            en: 'Empathy map with investor pains, gains, and touchpoints',
          },
          caption: { es: 'Empathy map', en: 'Empathy map' },
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Hallazgos e Insights', en: 'Findings and Insights' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Con estos insights definí los Jobs To Be Done del usuario al registrarse y durante su uso. Apliqué How Might We para traducirlos en funcionalidades centradas en sus pains específicos.',
        en: 'With these insights I defined the user\'s Jobs To Be Done at registration and during use. I applied How Might We to translate them into features focused on their specific pains.',
      },
    },
    {
      type: 'cards',
      items: [
        {
          title: { es: 'Vergüenza por ignorancia', en: 'Shame from lack of knowledge' },
          body: {
            es: 'Me da vergüenza perder mi dinero por ignorancia y falta de preparación.',
            en: 'I am ashamed of losing my money due to ignorance and lack of preparation.',
          },
          fill: 'yellow',
        },
        {
          title: { es: 'Presión social', en: 'Social pressure' },
          body: {
            es: 'No quiero ser criticado o que mi familia y amigos me saquen en cara que no debía invertir.',
            en: 'I don\'t want to be criticized or have family and friends throw it in my face that I shouldn\'t have invested.',
          },
          fill: 'yellow',
        },
        {
          title: { es: 'Miedo al fracaso', en: 'Fear of failure' },
          body: {
            es: 'Me sentiría un fracasado si pierdo mi dinero; preferiría que alguien especializado lo haga por mí.',
            en: 'I would feel like a failure if I lose my money; I\'d prefer a specialist to do it for me.',
          },
          fill: 'yellow',
        },
        {
          title: { es: 'Culpa familiar', en: 'Family guilt' },
          body: {
            es: 'Perder mi dinero me haría sentir culpable y perjudicaría a mi familia por ser "arriesgado".',
            en: 'Losing my money would make me feel guilty and harm my family for being "risky".',
          },
          fill: 'yellow',
        },
      ],
    },
    {
      type: 'paragraph',
      text: {
        es: 'Por la naturaleza del producto, la plataforma debía incluir funcionalidades base: inicio de sesión, firma electrónica, descarga de apps y calculadora de inversión.',
        en: 'Given the product\'s nature, the platform needed core features: sign-in, e-signature, app download, and investment calculator.',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Prioricé que estas funciones fueran fáciles y rápidas de ejecutar. Los objetivos principales:',
        en: 'I prioritized making these functions easy and fast to use. The main objectives:',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Prevenir el abandono durante los procesos de afiliación y uso de la plataforma',
          'Garantizar la correcta validación de identidad',
          'Optimizar las transacciones para que sean fluidas y eficientes',
        ],
        en: [
          'Prevent drop-off during affiliation and platform use',
          'Ensure correct identity validation',
          'Optimize transactions for smooth, efficient flows',
        ],
      },
    },
    {
      type: 'hmwTable',
      rows: [
        {
          userNeed: {
            es: 'Quiero hacer crecer mi dinero con una forma simple y confiable de invertir, sin trabas técnicas ni burocráticas.',
            en: 'I want to grow my money through a simple, reliable way to invest, without technical or bureaucratic hurdles.',
          },
          hmw: {
            es: '¿Cómo simplificar el acceso a la inversión para cualquier persona, sin conocimientos técnicos ni barreras burocráticas?',
            en: 'How might we simplify access to investing for anyone, without technical knowledge or bureaucratic barriers?',
          },
          guidelines: {
            es: 'Dar seguridad en procesos complejos (afiliación, cuenta, firma electrónica, calculadora) mostrando siempre información de valor.',
            en: 'Provide security in complex processes (affiliation, account, e-signature, calculator), always surfacing valuable information.',
          },
          features: {
            es: [
              'CTAs claros y visibles de "Iniciar sesión" y "Crear cuenta"',
              'Botón "Calculadora de inversión" con énfasis visual',
              'CTA por sección hacia productos invertibles',
              'Acceso directo a la app de firma electrónica',
              'Regulación SMV visible en el banner principal',
            ],
            en: [
              'Clear, visible "Sign in" and "Create account" CTAs',
              'Emphasized "Investment calculator" button',
              'Section-level CTAs toward investable products',
              'Direct access to the e-signature app',
              'SMV regulation visible on the main banner',
            ],
          },
        },
        {
          userNeed: {
            es: 'Al invertir y gestionar mis inversiones necesito ayuda e información precisa y continua para decidir con criterio.',
            en: 'While investing and managing my investments I need accurate, ongoing help and information to decide with confidence.',
          },
          hmw: {
            es: '¿Cómo dar soporte e información precisa a lo largo de todo el journey, de la afiliación al uso regular?',
            en: 'How might we provide accurate support and information across the whole journey, from affiliation to regular use?',
          },
          guidelines: {
            es: 'Acompañar con ayuda precisa en todo el proceso, no solo en afiliación sino también en el uso activo de la plataforma.',
            en: 'Support with accurate help throughout the process, not only during affiliation but also in active platform use.',
          },
          features: {
            es: [
              'Onboarding al ingresar a la plataforma',
              'FAQs en el footer y tooltips en términos técnicos',
              'Personaje guía presente en todas las vistas',
            ],
            en: [
              'Onboarding when entering the platform',
              'FAQs in the footer and tooltips on technical terms',
              'Guide character present across all views',
            ],
          },
        },
        {
          userNeed: {
            es: 'Ante una inversión riesgosa necesito evaluar y gestionar ese riesgo de forma informada, sin poner en peligro mi estabilidad ni la de mi familia.',
            en: 'Facing a risky investment I need to evaluate and manage that risk in an informed way, without threatening my stability or my family\'s.',
          },
          hmw: {
            es: '¿Cómo evaluar el riesgo de inversión de forma simple y didáctica, dando confianza sin terminología compleja?',
            en: 'How might we evaluate investment risk simply and didactically, building confidence without complex terminology?',
          },
          guidelines: {
            es: 'Enseñar desde la web pública el paso a paso de cómo invertir, con términos simples y confianza en todo momento.',
            en: 'Teach the step-by-step of how to invest from the public website, with simple terms and confidence throughout.',
          },
          features: {
            es: [
              'Paso a paso visual de la afiliación en el home',
              'Wording simple y entendible',
              'Contratos de intermediación digitalizados',
              'Notificaciones para explicar, informar y alertar',
            ],
            en: [
              'Visual step-by-step affiliation on the home',
              'Simple, understandable wording',
              'Digitized brokerage agreements',
              'Notifications to explain, inform, and alert',
            ],
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'DISEÑAR', en: 'DESIGN' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'En esta fase del proyecto, mis esfuerzos se centraron en:',
        en: 'In this phase of the project, my efforts focused on:',
      },
    },
    {
      type: 'list',
      ordered: true,
      items: {
        es: [
          'Reestructurar el mapa de sitio para facilitar el acceso a procesos obligatorios y complejos.',
          'Plantear wireframes de mediana fidelidad con los features priorizados en Análisis.',
          'Crear el user flow completo de la plataforma.',
          'Diseñar la UI sobre el estilo de la web pública (en paralelo) y una plantilla lista para desarrollo.',
        ],
        en: [
          'Restructure the sitemap to ease access to mandatory, complex processes.',
          'Propose medium-fidelity wireframes with the features prioritized in Analysis.',
          'Create the platform\'s complete user flow.',
          'Design the UI on the public website style (built in parallel) and a dev-ready template.',
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Arquitectura de información', en: 'Information architecture' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Reestructuré la arquitectura de información orientando cada funcionalidad a resultados medibles de negocio. Para ello debía:',
        en: 'I restructured information architecture, orienting each feature toward measurable business outcomes. To do so I needed to:',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Justificar y validar técnicamente las funcionalidades e interacciones que generaban valor a los inversores',
          'Ubicar estratégicamente cada bloque de contenido y operativa según el impacto de negocio que se quería lograr a futuro',
        ],
        en: [
          'Technically justify and validate features and interactions that delivered value to investors',
          'Strategically place content and operational blocks according to desired business impact',
        ],
      },
    },
    {
      type: 'cards',
      variant: 'postitsKpi',
      title: { es: 'Features → KPIs', en: 'Features → KPIs' },
      items: [
        {
          title: {
            es: 'Productos, Productos vigentes, Detalle de productos',
            en: 'Products, Active products, Product detail',
          },
          indicators: {
            es: [
              '↑ Cross-selling (generación de inversiones)',
              '↓ Consultas a Soporte',
            ],
            en: [
              '↑ Cross-selling (investment generation)',
              '↓ Support inquiries',
            ],
          },
        },
        {
          title: { es: 'Onboarding', en: 'Onboarding' },
          bodyLines: {
            es: ['Siempre visible', 'Información de valor'],
            en: ['Always visible', 'Valuable information'],
          },
          indicators: {
            es: [
              '↓ Churn (primera sesión)\n↓ Fricción en la adopción',
              '↓ Time to Value (llega antes a su primera inversión / respuesta útil)',
              '↑ Task Success Rate (cumple objetivos sin ayuda)',
            ],
            en: [
              '↓ Churn (first session)\n↓ Adoption friction',
              '↓ Time to Value (reaches first investment / useful answer sooner)',
              '↑ Task Success Rate (achieves goals without help)',
            ],
          },
        },
        {
          title: { es: 'Mi cuenta SAB', en: 'My SAB account' },
          bodyLines: {
            es: ['Flujos post-inversión', 'Trazabilidad de inversiones'],
            en: ['Post-investment flows', 'Investment traceability'],
          },
          indicators: {
            es: ['↑ Retención\n↑ NPS'],
            en: ['↑ Retention\n↑ NPS'],
          },
        },
        {
          title: { es: 'Mi efectivo', en: 'My cash' },
          bodyLines: {
            es: ['Transacciones disponibles', 'Descarga de app', 'Firma electrónica'],
            en: ['Available transactions', 'App download', 'Electronic signature'],
          },
          indicators: {
            es: ['↑ Activación transaccional\n↑ Transacciones completadas'],
            en: ['↑ Transactional activation\n↑ Completed transactions'],
          },
        },
      ],
    },
    {
      type: 'gallery',
      title: { es: 'Arquitectura de información + KPIs', en: 'Information architecture + KPIs' },
      layout: 'carousel',
      images: [
        {
          src: `${P}/mapa-sitio.jpg`,
          alt: {
            es: 'Mapa de sitio del dashboard con navegación principal y subsecciones',
            en: 'Dashboard sitemap with main navigation and subsections',
          },
          caption: { es: 'Mapa de sitio', en: 'Sitemap' },
        },
        {
          src: `${P}/arquitectura-kpis.jpg`,
          alt: {
            es: 'Arquitectura de información con indicadores de conversión por módulo',
            en: 'Information architecture with conversion indicators per module',
          },
          caption: {
            es: 'Arquitectura de información + KPIs',
            en: 'Information architecture + KPIs',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: { es: 'Diseño de interfaz (UI)', en: 'Interface design (UI)' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Tras iterar sobre los wireframes, diseñé la propuesta visual tomando como base el estilo de la web pública que se implementaba en paralelo.',
        en: 'After wireframe iterations, I designed the visual proposal using the public website style being implemented in parallel as the base.',
      },
    },
    {
      type: 'heading',
      level: 4,
      text: { es: 'Features principales', en: 'Main features' },
    },
    {
      type: 'list',
      items: {
        es: [
          'Cambiar contraseña',
          'Calculadora de inversión',
          'Gestión de cuentas bancarias',
          'Escaneo de QR para descarga de app de firma electrónica',
          'Onboarding',
          'Notificaciones',
        ],
        en: [
          'Password change',
          'Investment calculator',
          'Bank account management',
          'QR scan for e-signature app download',
          'Onboarding',
          'Notifications',
        ],
      },
    },
    {
      type: 'image',
      src: `${P}/ui-pantallas.jpg`,
      title: { es: 'UI AppCres — Dashboard', en: 'AppCres UI — Dashboard' },
      alt: {
        es: 'Pantallas del dashboard AppCres: inversiones, calculadora, QR de firma y seguimiento de órdenes',
        en: 'AppCres dashboard screens: investments, calculator, signature QR, and order tracking',
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Solución', en: 'Solution' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'La solución unificó web pública y plataforma de inversión en un journey digital end-to-end: desde el primer contacto hasta la firma electrónica y la gestión activa de inversiones. Tres decisiones de diseño — derivadas de los HMW y del research emocional — estructuran la propuesta: acceso sin fricción, confianza continua y evaluación de riesgo didáctica.',
        en: 'The solution unified the public website and investment platform into an end-to-end digital journey: from first contact through e-signature to active investment management. Three design decisions — derived from HMW and emotional research — structure the proposal: frictionless access, continuous trust, and didactic risk evaluation.',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Acceso sin fricción — web pública + plataforma',
        en: 'Frictionless access — public website + platform',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'CTAs claros de "Iniciar sesión" y "Crear cuenta" en posición visible — primer paso hacia la afiliación digital.',
          'Calculadora de inversión con énfasis visual — reduce barrera de entrada sin conocimiento bursátil previo.',
          'Derivación por sección hacia productos invertibles — cada bloque de la web empuja hacia acción concreta.',
          'Acceso directo a descarga de app de firma electrónica (QR en plataforma) — cierra el gap entre web y operación.',
          'Regulación SMV visible en banner principal — confianza regulatoria desde el primer contacto.',
          'Contratos de intermediación digitalizados — elimina dependencia de contratos físicos.',
        ],
        en: [
          'Clear, visible "Sign in" and "Create account" CTAs — first step toward digital affiliation.',
          'Investment calculator with visual emphasis — lowers entry barrier without prior market knowledge.',
          'Section-level CTAs toward investable products — each web block drives concrete action.',
          'Direct access to e-signature app download (QR on platform) — closes the gap between web and operations.',
          'SMV regulation visible on main banner — regulatory trust from first contact.',
          'Digitized brokerage agreements — removes dependence on physical contracts.',
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Confianza continua — acompañamiento en todo el journey',
        en: 'Continuous trust — guidance throughout the journey',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Onboarding al ingresar a la plataforma — orientación en la primera sesión, no solo en afiliación.',
          'FAQs en footer de web pública + tooltips en términos técnicos — ayuda contextual sin salir del flujo.',
          'Personaje guía presente en vistas clave — continuidad de acompañamiento más allá del onboarding.',
          'Notificaciones para explicar procesos, informar y alertar — transparencia en cada transacción.',
        ],
        en: [
          'Onboarding when entering the platform — guidance in the first session, not only during affiliation.',
          'FAQs on public website footer + tooltips on technical terms — contextual help without leaving the flow.',
          'Guide character present in key views — ongoing accompaniment beyond onboarding.',
          'Notifications to explain processes, inform, and alert — transparency in every transaction.',
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Riesgo didáctico — invertir sin sentirse abrumado',
        en: 'Didactic risk — investing without feeling overwhelmed',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Paso a paso visual del proceso de afiliación en el home de la web pública — reduce vergüenza por ignorancia y miedo al fracaso detectados en research.',
          'Wording simple y entendible — traduce jerga bursátil a lenguaje cotidiano.',
          'Gráfica del flujo de inversión didáctica — el usuario evalúa riesgo con herramientas, no solo con intermediarios.',
          'Arquitectura de información alineada a KPIs (productos, onboarding, cuenta SAB, efectivo/firma) — cada módulo con propósito medible definido como baseline de diseño.',
        ],
        en: [
          'Visual step-by-step of the affiliation process on the public website home — reduces shame from lack of knowledge and fear of failure identified in research.',
          'Simple, understandable wording — translates market jargon into everyday language.',
          'Didactic investment flow graphic — users evaluate risk with tools, not only through intermediaries.',
          'Information architecture aligned to KPIs (products, onboarding, SAB account, cash/signature) — each module with a defined measurable purpose as a design baseline.',
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'ENTREGAR', en: 'DELIVER' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'No hubo UAT con usuarios reales en esta fase; validé en cambio la integración con la app de firma electrónica de un proveedor externo — prototipando e iterando con el equipo técnico hasta una experiencia funcional. Al ser un producto desde cero, definí KPIs por módulo como baseline de diseño (sin métricas históricas previas).',
        en: 'There was no UAT with real users in this phase; instead I validated integration with a third-party e-signature app — prototyping and iterating with the technical team until a functional experience was achieved. As a greenfield product, I defined KPIs per module as a design baseline (with no prior historical metrics).',
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
          'Plataforma de inversión + web pública diseñadas como journey digital end-to-end — afiliación, firma y gestión en un solo ecosistema.',
          'Onboarding digital que reemplaza contratos físicos y procesos presenciales — orientado a capturar inversores digitales emergentes (2019).',
          'Integración de firma electrónica validada con equipo técnico — flujo funcional antes del handoff.',
          'IA replanteada con KPIs por módulo (cross-selling, churn, retención, activación transaccional) como baseline de diseño.',
          'Dashboard con calculadora, QR de firma, gestión de cuentas y notificaciones — entregado listo para desarrollo.',
        ],
        en: [
          'Investment platform + public website designed as an end-to-end digital journey — affiliation, signature, and management in one ecosystem.',
          'Digital onboarding replacing physical contracts and in-person processes — oriented toward capturing emerging digital investors (2019).',
          'E-signature integration validated with the technical team — functional flow before handoff.',
          'Information architecture reworked with KPIs per module (cross-selling, churn, retention, transactional activation) as a design baseline.',
          'Dashboard with calculator, signature QR, account management, and notifications — delivered ready for development.',
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
          'Autonomía sobre las decisiones de diseño. La colaboración directa con el Líder Técnico aceleró aprobaciones de definiciones y diseño.',
          'Entender las reglas de negocio y producto. Los asesores de inversión eran expertos en el rubro — debía fundamentar propuestas al nivel de sus conocimientos.',
          'La complejidad del proceso de validación de identidad. A pesar de ser un servicio tercerizado, implicó mucho trabajo colaborativo e integración.',
          'Mantener informado al usuario con "Security-First Mindset" — comunicaciones multicanal, notificaciones transaccionales, onboarding y percepción de seguridad en operaciones.',
          'Process Mapping como herramienta central para traducir reglas de negocio en flujos simplificados y features accionables.',
        ],
        en: [
          'Design decision autonomy. Direct collaboration with the tech lead accelerated definition and design approvals.',
          'Understanding business and product rules. Investment advisors were industry experts — I needed to justify proposals at their knowledge level.',
          'Complexity of identity validation. Despite being a third-party service, it required extensive collaborative and integration work.',
          'Keeping users informed with a "Security-First Mindset" — multi-channel communications, transaction notifications, onboarding, and security perception in operations.',
          'Process Mapping as a core tool to translate business rules into simplified flows and actionable features.',
        ],
      },
    },
  ],
  relatedSlugs: ['project_4', 'project_1'],
};
