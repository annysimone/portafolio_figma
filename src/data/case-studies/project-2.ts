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
        es: 'ACRES Sociedad Agente de Bolsa (ACRES SAB), parte del grupo ACRES Finance, brinda soluciones de financiamiento y alternativas de inversión en el mercado de capitales, enfrentaba un modelo operativo algo obsoleto que limitaba su escalabilidad.',
        en: 'ACRES Sociedad Agente de Bolsa (ACRES SAB), part of the ACRES Finance group, provides financing solutions and investment alternatives in the capital markets, but faced a somewhat obsolete operating model that limited its scalability.',
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
        es: 'Bajo este contexto, se detectó las siguientes oportunidades estratégicas:',
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
        es: 'Además de incrementar el número de clientes, era importante darles seguridad y eficiencia transaccional. Bajo este panorama, la propuesta de valor sobre la que enfocaríamos nuestro esfuerzo estaba enmarcada en:',
        en: 'Beyond growing the customer base, it was critical to provide security and transactional efficiency. Our value proposition focused on:',
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
        es: 'Dado que era un producto y rubro completamente nuevos para mí, apliqué el framework del Doble Diamante adaptado al contexto específico del proyecto, estructurando mi trabajo en 4 etapas: Descubrir, Analizar, Diseñar y Entregar.',
        en: 'Since the product and industry were entirely new to me, I applied the Double Diamond framework adapted to the project context, structuring my work across four stages: Discover, Analyze, Design, and Deliver.',
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
        es: 'Con la documentación disponible, las reuniones de definición con la PO, LT y otros stakeholders, pude armar un diagrama de procesos para entender el ecosistema completo de funcionalidades de la plataforma y cómo la integraríamos a la Web pública. La complejidad estaba en las validaciones técnicas e integraciones con APIs internas y de terceros.',
        en: 'Using available documentation and meetings with the PO, tech lead, and stakeholders, I mapped processes to understand the full platform feature ecosystem and how it would integrate with the public website. Complexity centered on technical validations and integrations with internal and third-party APIs.',
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
          'Comprensión integral del producto (características y complejidad)',
          'Entender el proceso de afiliación y registro de nuevos inversores en la plataforma',
          'Conocer las validaciones de identidad y protocolos de seguridad implementados durante la afiliación y sus implicancias tecnológicas y operativas',
          'Trazabilidad completa de funcionalidades y servicios disponibles en la plataforma',
        ],
        en: [
          'Full product understanding (features and complexity)',
          'Affiliation and new investor registration process',
          'Identity validation and security protocols during affiliation and their technical/operational implications',
          'Complete traceability of available platform features and services',
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
        es: 'Para ser un inversor activo en la plataforma se requería realizar ciertos procedimientos y validaciones de identidad que podrían resultar abrumadores para los usuarios, asi que, utilicé algunos artefactos que me permitieran detectar los touchpoints de fricción, pains en cuanto a preferencias de inversión y consecuentes oportunidades de mejora.',
        en: 'To be an active investor on the platform required certain procedures and identity validations that could overwhelm users, so I used artifacts that helped me identify friction touchpoints, pains around investment preferences, and resulting improvement opportunities.',
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
        es: 'Estos insights me permitieron detectar Jobs To Be Done que los usuarios deberían completar al registrarse en la plataforma y durante su permanencia en ella. Para encontrar propuestas funcionales y de interacción que resolvieran esas tareas apliqué ¿How Might We...? lo cuál me ayudó a delimitar funcionalidades centradas en los pains específicos del usuario.',
        en: 'These insights helped me identify Jobs To Be Done that users should complete when registering on the platform and throughout their ongoing use. To find functional and interaction proposals that would address those tasks, I applied How Might We...?, which helped me define features focused on the user\'s specific pains.',
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
        es: 'Debido a la naturaleza del producto, la plataforma debe incluir funcionalidades fundamentales como inicio de sesión, firma electrónica y la posibilidad de descargar aplicaciones o calculadora de inversiones.',
        en: 'Given the product nature, the platform needed core features including sign-in, e-signature, and access to apps or the investment calculator.',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Para garantizar una experiencia óptima, enfoqué mis esfuerzos en que estas funciones sean de fácil y rápida ejecución. Los objetivos principales fueron:',
        en: 'To ensure an optimal experience, I focused on making these functions easy and quick to use. The main objectives were:',
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
            es: 'Cuando quiero hacer crecer mi dinero, necesito una forma simple y confiable de acceder a oportunidades de inversión, para poder aumentar mi patrimonio sin complicaciones técnicas o burocráticas.',
            en: 'When I want to grow my money, I need a simple, reliable way to access investment opportunities, so I can increase my wealth without technical or bureaucratic complications.',
          },
          hmw: {
            es: '¿Cómo podríamos simplificar el acceso a oportunidades de inversión para que cualquier persona pueda hacer crecer su dinero, sin necesidad de conocimientos tecnológicos avanzados ni enfrentar barreras burocráticas tradicionales?',
            en: 'How might we simplify access to investment opportunities so anyone can grow their money, without needing advanced technical knowledge or facing traditional bureaucratic barriers?',
          },
          guidelines: {
            es: 'Brindar seguridad a los usuarios durante los procesos complejos como: afiliación, creación de cuenta, descarga de app, firma electrónica, calculadora de inversión, etc, siempre mostrando información valiosa',
            en: 'Provide users with security during complex processes such as affiliation, account creation, app download, e-signature, investment calculator, etc., always showing valuable information',
          },
          features: {
            es: [
              'Botones para "Iniciar sesión" y "Crear cuenta" claros y en un lugar visible',
              'Mostrar con énfasis el botón "Calculadora de inversión"',
              'En cada bloque de la web derivar mediante un "call to action" a los productos en los que puede invertir',
              'Crear un acceso directo a la descarga de la aplicación para la firma electrónica',
              'Colocar en el banner principal de la web pública, que están supervisados y regulados por la SMV',
            ],
            en: [
              'Clear, visible buttons for "Sign in" and "Create account"',
              'Emphasize the "Investment calculator" button',
              'In each web section, use a call to action toward investable products',
              'Create direct access to download the e-signature application',
              'On the public website main banner, state supervision and regulation by SMV',
            ],
          },
        },
        {
          userNeed: {
            es: 'Cuando quiero invertir y gestionar mis inversiones necesito recibir ayuda e información precisa y continua para poder tomar decisiones informadas al usar activamente la plataforma.',
            en: 'When I want to invest and manage my investments I need accurate, ongoing help and information so I can make informed decisions while actively using the platform.',
          },
          hmw: {
            es: '¿Cómo podríamos proporcionar soporte e información precisa de manera continua a los usuarios durante todo su journey de inversión, desde la afiliación hasta el uso regular de la plataforma?',
            en: 'How might we provide accurate, continuous support and information to users throughout their investment journey, from affiliation to regular platform use?',
          },
          guidelines: {
            es: 'Dar la ayuda e información precisa a los usuarios y que esté presente durante todo el proceso, no sólo de afiliación si no también cuando ya usen la plataforma de inversión',
            en: 'Provide users with accurate help and information present throughout the entire process, not only during affiliation but also when they already use the investment platform',
          },
          features: {
            es: [
              'Proceso de onboarding al ingresar a la plataforma',
              'Acceso a FAQ\'s en el footer de la web pública, uso de "tool tips" en términos más técnicos',
              'Creación de un personaje a modo de guía, que esté presente en todas las vistas de la plataforma',
            ],
            en: [
              'Onboarding process when entering the platform',
              'Access to FAQs in the public website footer, use of tooltips on more technical terms',
              'Creation of a guide character present across all platform views',
            ],
          },
        },
        {
          userNeed: {
            es: 'Cuando quiero hacer una inversión riesgosa, necesito una forma de evaluar y gestionar ese riesgo de manera informada, para poder tomar decisiones financieras que no pongan en peligro mi estabilidad económica ni afecten negativamente a mi familia.',
            en: 'When I want to make a risky investment, I need a way to evaluate and manage that risk in an informed way, so I can make financial decisions that don\'t threaten my economic stability or negatively affect my family.',
          },
          hmw: {
            es: '¿Cómo podríamos crear una experiencia confiable que permita evaluar riesgos de inversión de manera simple y didáctica, brindándoles confianza y herramientas para tomar decisiones financieras sin sentirse abrumados por terminología compleja?',
            en: 'How might we create a trustworthy experience that lets users evaluate investment risk simply and didactically, giving them confidence and tools to make financial decisions without feeling overwhelmed by complex terminology?',
          },
          guidelines: {
            es: 'Desde la web pública enseñar de manera didáctica y concreta el paso a paso de cómo invertir, usando términos simples y dando confianza al usuario en todo momento.',
            en: 'From the public website, teach the step-by-step of how to invest in a didactic and concrete way, using simple terms and giving the user confidence at all times.',
          },
          features: {
            es: [
              'Graficar el paso a paso del proceso de afiliación en el home de la web pública',
              'Utilizar un wording simple y entendible',
              'Digitalizar los contratos de intermediación',
              'Crear / mostrar notificaciones para explicar procesos, informar y/o alertar',
            ],
            en: [
              'Graph the step-by-step affiliation process on the public website home',
              'Use simple, understandable wording',
              'Digitize brokerage agreements',
              'Create / show notifications to explain processes, inform, and/or alert',
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
          'Reestructurar el mapa de sitio inicial propuesto como base del proyecto. La profundización en las necesidades del usuario me hizo entender que era necesario facilitar los accesos a procesos obligatorios y con cierta complejidad.',
          'Plantear la propuesta en wireframes de mediana fidelidad con los features y procesos priorizados en la fase de Análisis.',
          'Crear un user flow completo de la plataforma',
          'Diseñar la plataforma tomando el estilo de la web pública (implementada en paralelo) y ciñéndome a una plantilla que sería usada por el equipo de desarrolladores.',
        ],
        en: [
          'Restructuring the initial sitemap proposed as the project baseline. Deepening user needs helped me understand it was necessary to facilitate access to mandatory processes with certain complexity.',
          'Proposing medium-fidelity wireframes with features and processes prioritized in the Analysis phase.',
          'Creating a complete platform user flow',
          'Designing the platform using the style of the public website (implemented in parallel) and adhering to a template that would be used by the development team.',
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
        es: 'Enfoqué y centralicé mi esfuerzo en que la reestructuración de la arquitectura de información y cada funcionalidad esté orientada a futuros resultados medibles para el negocio, para esto debía:',
        en: 'I focused on restructuring information architecture so every feature was oriented toward measurable business outcomes; to do this I needed to:',
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
              '↓ Churn (primera sesión)\n↓ Fricción en proceso de adopción',
              'Time to Value (información y respuestas útiles y más rápidas sobre sus inversiones)',
              '↑ Task Success Rate (cumple sus objetivos sin ayuda)',
            ],
            en: [
              '↓ Churn (first session)\n↓ Adoption process friction',
              'Time to Value (useful, faster information and answers about their investments)',
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
            es: ['↑ Lifetime Value (LTV)\n↑ Lealtad'],
            en: ['↑ Lifetime Value (LTV)\n↑ Loyalty'],
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
        es: 'Luego de iteraciones sobre los wireframes, se diseñó la propuesta visual tomando como base el estilo de la web pública que estaba implementándose en paralelo.',
        en: 'After wireframe iterations, the visual proposal was designed using the public website style being implemented in parallel as the base.',
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
      text: { es: 'ENTREGAR', en: 'DELIVER' },
    },
    {
      type: 'paragraph',
      text: {
        es: 'No se realizó un primer testeo con usuarios reales, pero sí fue necesario validar la integración con la aplicación de firma electrónica de un proveedor externo. Para esto, se prototiparon los flujos e iteraron con el equipo técnico hasta lograr una experiencia funcional.',
        en: 'There was no initial testing with real users, but validating integration with a third-party e-signature app was essential. Flows were prototyped and iterated with the technical team until a functional experience was achieved.',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Como se empezó desde cero no teníamos métricas previas con las que comparar; sin embargo, orientar estratégicamente las funcionalidades hacia indicadores y métricas de valor para los usuarios y el negocio permitió adelantar la entrega de un proceso consistente y escalable.',
        en: 'Starting from scratch meant no baseline metrics to compare against; however, aligning features with user and business value indicators enabled delivering a consistent, scalable process.',
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
          'Autonomía sobre las decisiones de diseño. La colaboración y comunicación directa con el Líder Técnico fue una constante a lo largo del proyecto, lo cual aceleró las aprobaciones de las definiciones y del diseño.',
          'Entender las reglas de negocio y producto. Los asesores de inversión eran expertos en el rubro y debía estar al nivel de sus conocimientos para fundamentar mis propuestas de solución.',
          'La complejidad del proceso de validación de identidad. A pesar de ser un servicio tercerizado, implicó mucho trabajo colaborativo y de integración.',
          'Mantener informado al usuario y "Security-First Mindset". Desde el uso de diferentes medios para el envío de comunicaciones y notificaciones por las transacciones efectuadas, el Onboarding inicial al utilizar la plataforma, hasta la percepción de seguridad al realizar operaciones.',
          'Entendimiento de procesos. Este proyecto fue mi primer acercamiento al Process Mapping como herramienta para profundizar en reglas de negocio y simplificar procesos complejos.',
        ],
        en: [
          'Design decision autonomy. Direct collaboration and communication with the tech lead was constant throughout the project, speeding up definition and design approvals.',
          'Understanding business and product rules. Investment advisors were industry experts; I needed to match their knowledge level to justify my solution proposals.',
          'Complexity of identity validation. Despite being a third-party service, it required extensive collaborative and integration work.',
          'Keeping users informed with a "Security-First Mindset" — from multi-channel communications and transaction notifications to initial onboarding and security perception when performing operations.',
          'Process understanding. This project was my first deep dive into Process Mapping as a tool to explore business rules and simplify complex workflows.',
        ],
      },
    },
  ],
  relatedSlugs: ['project_4', 'project_1'],
};
