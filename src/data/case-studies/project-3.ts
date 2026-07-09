import type { CaseStudy } from '../types';

const P = '/assets/projects/project_3';

export const project3CaseStudy: CaseStudy = {
  slug: 'project_3',
  meta: {
    title: {
      es: 'Pacífico Seguros — Seguro de Sepelio — Anny Mamani',
      en: 'Pacífico Seguros — Funeral Insurance — Anny Mamani',
    },
    description: {
      es: 'Canal digital del Seguro de Sepelio de Pacífico: e-commerce y captura de leads orientados a habilitar la conversión más allá del televentas.',
      en: 'Digital channel for Pacífico\'s funeral insurance: e-commerce and lead capture aimed at enabling conversion beyond the telesales channel.',
    },
    ogImage: `${P}/solucion-ecommerce-mobile.png`,
  },
  header: {
    year: { es: '2025', en: '2025' },
    title: { es: 'Seguro de Sepelio.', en: 'Funeral insurance.' },
    subtitle: { es: 'Pacífico Seguros', en: 'Pacífico Seguros' },
    accent: '#ab0782',
    role: { es: 'Product Designer', en: 'Product Designer' },
    scope: {
      es: 'E-commerce + landing de captación de leads',
      en: 'E-commerce + lead-capture landing',
    },
    outcome: {
      es: 'Canal digital habilitado para convertir sin depender del televentas',
      en: 'Digital channel enabled to convert beyond the telesales channel',
    },
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
        es: 'La venta de Seguro de Sepelio por el canal de Telemarketing fue pausada temporalmente. Solo se mantuvo una landing page informativa en la web principal de Pacífico Seguros que no generaba leads ni conversión, lo que representaba oportunidades de cotización perdidas. Como Product Designer, diseñé el e-commerce de cotización y la landing de producto para reactivar el canal digital.',
        en: 'Funeral insurance sales via the telemarketing channel were temporarily paused. Only an informational landing page remained on Pacífico Seguros\' main website—it generated no leads or conversion, representing lost quoting opportunities. As Product Designer, I designed the quoting e-commerce and product landing to reactivate the digital channel.',
      },
    },
    {
      type: 'heading',
      level: 2,
      text: { es: 'Challenge', en: 'Challenge' },
    },
    {
      type: 'cards',
      variant: 'pair',
      extraSpacingTop: 24,
      items: [
        {
          title: { es: 'Canal digital sin conversión', en: 'Digital channel without conversion' },
          body: {
            es: 'Telemarketing pausado y sin flujo activo de cotización en línea.',
            en: 'Telemarketing paused with no active online quoting flow.',
          },
        },
        {
          title: { es: 'Landing sin captura de leads', en: 'Landing without lead capture' },
          body: {
            es: 'Página informativa sin conversión ni inicio del proceso comercial.',
            en: 'Informational page with no conversion or commercial process kickoff.',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: { es: '¿Qué se debía lograr?', en: 'What needed to be achieved?' },
    },
    {
      type: 'heading',
      level: 4,
      text: { es: 'e-commerce', en: 'e-commerce' },
    },
    {
      type: 'cards',
      variant: 'row3',
      items: [
        {
          title: {
            es: 'Reducir registros manuales',
            en: 'Reduce manual data entry',
          },
          body: {
            es: 'Tiempo de llenado estimado en mapeo: ~12–15 min.',
            en: 'Estimated fill time in process mapping: ~12–15 min.',
          },
        },
        {
          title: {
            es: 'Reducir % de abandono',
            en: 'Reduce abandonment rate',
          },
          body: {
            es: 'Sobrecarga cognitiva durante el llenado del formulario.',
            en: 'Cognitive overload during form completion.',
          },
          postIt: {
            es: 'Ajusté diseño e interacciones para resolver fricciones técnicas del flujo.',
            en: 'Adjusted design and interactions to resolve technical flow friction.',
          },
        },
        {
          title: {
            es: 'Optimizar flujo end to end',
            en: 'Optimize end-to-end flow',
          },
          bodyLines: {
            es: [
              '↑ Form Completion Rate (por pasos)',
              '↓ Time to Complete — proyección ~8–10 min (research + benchmark)',
            ],
            en: [
              '↑ Form completion rate (by step)',
              '↓ Time to complete — ~8–10 min projection (research + benchmark)',
            ],
          },
          postIt: {
            es: 'Especifiqué formato de datos alineado a estándar Salesforce para handoff a desarrollo.',
            en: 'Specified data format aligned to Salesforce standards for development handoff.',
          },
        },
      ],
    },
    {
      type: 'heading',
      level: 4,
      text: { es: 'landing', en: 'landing' },
    },
    {
      type: 'cards',
      variant: 'row3',
      items: [
        {
          title: {
            es: 'Form lead visible',
            en: 'Visible lead form',
          },
          body: {
            es: 'Que capture leads calificados para iniciar la cotización.',
            en: 'Capture qualified leads to start the quote.',
          },
        },
        {
          title: {
            es: 'Propuesta de valor clara y visible',
            en: 'Clear, visible value proposition',
          },
          body: {
            es: 'Sobre beneficios, coberturas y exclusiones.',
            en: 'Covering benefits, coverage, and exclusions.',
          },
          postIt: {
            es: 'Reorganicé la arquitectura de información para clarificar valor y coberturas.',
            en: 'Reorganized information architecture to clarify value and coverage.',
          },
        },
        {
          title: {
            es: 'Soporte post venta',
            en: 'Post-sale support',
          },
          body: {
            es: 'Como diferencial competitivo (escenarios de uso y FAQs).',
            en: 'As a competitive differentiator (use cases and FAQs).',
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
      type: 'heading',
      level: 3,
      text: {
        es: 'Research y Análisis competitivo',
        en: 'Research and competitive analysis',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Benchmark de Pacífico Seguros frente a La Positiva, Vivir Seguros, BCP y RIMAC en variedad de productos, estrategia de precios, adquisición de clientes e información disponible.',
        en: 'Benchmarked Pacífico Seguros against La Positiva, Vivir Seguros, BCP, and RIMAC on product variety, pricing strategy, customer acquisition, and available information.',
      },
    },
    {
      type: 'image',
      src: `${P}/competitive-analysis.png`,
      alt: {
        es: 'Matriz de análisis competitivo de seguros de sepelio en el mercado peruano',
        en: 'Competitive analysis matrix for funeral insurance in the Peruvian market',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Mapping Process E-commerce',
        en: 'E-commerce process mapping',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Mapeo del flujo end to end desde el form lead hasta la confirmación, incluyendo ramificaciones por detección del sistema, plan individual vs. familiar, y datos de pago.',
        en: 'End-to-end flow mapping from the lead form through confirmation, including branches for system detection, individual vs. family plan, and payment data.',
      },
    },
    {
      type: 'image',
      src: `${P}/process-ecommerce-mapping.png`,
      alt: {
        es: 'Diagrama de flujo del proceso e-commerce de Seguro de Sepelio',
        en: 'E-commerce process flow diagram for funeral insurance',
      },
    },
    {
      type: 'image',
      src: `${P}/process-mapping-findings.png`,
      widthReduce: 250,
      title: {
        es: 'Findings del Mapping Process',
        en: 'Mapping process findings',
      },
      alt: {
        es: 'Tres findings del mapeo: data entry, coordinación técnica y optimización de flujo',
        en: 'Three mapping findings: data entry, technical coordination, and flow optimization',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Arquitectura de información de landing Sepelio',
        en: 'Funeral insurance landing information architecture',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'Sitemap de la web de producto conectando form lead, beneficios, planes, coberturas y exclusiones, cómo usar, FAQs y el flujo e-commerce hacia Plan Individual y Plan Familiar.',
        en: 'Product web sitemap connecting lead form, benefits, plans, coverage and exclusions, how-to, FAQs, and the e-commerce flow toward Individual and Family plans.',
      },
    },
    {
      type: 'image',
      src: `${P}/ia-web-producto.png`,
      widthReduce: 200,
      alt: {
        es: 'Arquitectura de información de la web de producto Seguro de Sepelio',
        en: 'Information architecture for the funeral insurance product web',
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
        es: 'Diseñé dos superficies complementarias para recuperar la cotización digital: una landing de producto que captura leads calificados y un e-commerce end-to-end — sin pasarela de pago — que reduce fricción desde el formulario hasta la confirmación. Las decisiones partieron del mapeo de proceso, el benchmark competitivo y la coordinación con el equipo técnico para viabilizar integraciones en desarrollo.',
        en: 'I designed two complementary surfaces to restore digital quoting: a product landing that captures qualified leads and an end-to-end e-commerce flow — without a payment gateway — that reduces friction from form entry through confirmation. Decisions were grounded in process mapping, competitive benchmarking, and coordination with the technical team to enable integrations at development time.',
      },
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'E-commerce Seguro de Sepelio (mobile & desktop)',
        en: 'Funeral insurance e-commerce (mobile & desktop)',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'El e-commerce concentró la reducción de fricción: el mapeo estimó ~12–15 min en el flujo previo. Con prefill, progreso por pasos y menos campos manuales, la proyección del research apunta a ~8–10 min — coherente con cotizaciones digitales en seguros (intake progresivo, no meta de negocio acordada).',
        en: 'The e-commerce flow focused friction reduction: process mapping estimated ~12–15 min in the prior flow. With prefill, step-by-step progress, and fewer manual fields, research projected ~8–10 min — aligned with digital insurance quoting patterns (progressive intake, not an agreed business target).',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Formulario inteligente con prefill según identificación del sistema — campos de solo lectura donde el dato ya existe.',
          'Indicador de progreso y botón fijo en footer con guardado automático para retomar sin perder avance.',
          'Input search para datos domiciliarios — menos tipeo manual en campos de alta fricción.',
          'Reagrupación lógica de campos según findings del process mapping (individual vs. familiar, ramificaciones por detección).',
          'Formato de datos especificado alineado a Salesforce — listo para implementación en desarrollo.',
        ],
        en: [
          'Smart form with prefill from system identification — read-only fields where data already exists.',
          'Progress indicator and fixed footer button with auto-save to resume without losing progress.',
          'Search input for address data — less manual typing in high-friction fields.',
          'Logical field regrouping based on process mapping findings (individual vs. family, system-detection branches).',
          'Data format specified aligned to Salesforce — ready for implementation in development.',
        ],
      },
    },
    {
      type: 'gallery',
      layout: 'stack',
      images: [
        {
          src: `${P}/solucion-ecommerce-mobile.png`,
          widthReduce: 160,
          alt: {
            es: 'Solución e-commerce mobile con anotaciones de UX',
            en: 'Mobile e-commerce solution with UX annotations',
          },
          caption: { es: 'Mobile', en: 'Mobile' },
        },
        {
          src: `${P}/solucion-ecommerce-desktop.png`,
          alt: {
            es: 'Solución e-commerce desktop: selección de plan, asegurados y pago',
            en: 'Desktop e-commerce solution: plan selection, insured persons, and payment',
          },
          caption: { es: 'Desktop', en: 'Desktop' },
          wide: true,
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: {
        es: 'Web de producto Seguro de Sepelio (mobile & desktop)',
        en: 'Funeral insurance product web (mobile & desktop)',
      },
    },
    {
      type: 'paragraph',
      text: {
        es: 'La landing reemplaza la página informativa sin conversión por un punto de entrada comercial: cotización por DNI, comparativa clara de planes y contenido de confianza antes de entrar al e-commerce.',
        en: 'The landing replaces the non-converting informational page with a commercial entry point: ID-based quoting, clear plan comparison, and trust-building content before entering e-commerce.',
      },
    },
    {
      type: 'list',
      items: {
        es: [
          'Form lead visible en hero — captura de leads calificados como primer paso hacia la cotización.',
          'Comparativa de planes Individual y Familiar — decisión informada antes del flujo transaccional.',
          'Secciones de coberturas, exclusiones y FAQs — propuesta de valor transparente en un producto sensible.',
          'Arquitectura de información replanteada para conectar beneficios, planes y flujo e-commerce.',
          'Escenarios de uso y soporte post venta como diferencial frente al benchmark competitivo.',
        ],
        en: [
          'Visible lead form in hero — qualified lead capture as the first step toward quoting.',
          'Individual and Family plan comparison — informed decision before the transactional flow.',
          'Coverage, exclusions, and FAQ sections — transparent value proposition for a sensitive product.',
          'Information architecture reworked to connect benefits, plans, and the e-commerce flow.',
          'Use cases and post-sale support as a differentiator against the competitive benchmark.',
        ],
      },
    },
    {
      type: 'gallery',
      layout: 'stack',
      images: [
        {
          src: `${P}/solucion-web-mobile.png`,
          widthReduce: 160,
          alt: {
            es: 'Web de producto mobile: hero, planes y cómo usar',
            en: 'Mobile product web: hero, plans, and how-to',
          },
          caption: { es: 'Mobile', en: 'Mobile' },
        },
        {
          src: `${P}/solucion-web-desktop.png`,
          alt: {
            es: 'Web de producto desktop: landing, planes y coberturas',
            en: 'Desktop product web: landing, plans, and coverage',
          },
          caption: { es: 'Desktop', en: 'Desktop' },
          wide: true,
        },
      ],
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
          'E-commerce y landing entregados como diseño listo para desarrollo — cotización digital sin pasarela de pago.',
          'Formulario inteligente diseñado para reducir data entry y abandono; proyección de research ~12–15 min → ~8–10 min (benchmark seguros digitales, no meta de negocio).',
          'Landing con captura de leads, comparativa de planes y secciones de cobertura, exclusiones y FAQs.',
          'Arquitectura de producto conectando cotización, beneficios y flujo e-commerce end-to-end.',
          'Formato de datos Salesforce especificado en diseño para handoff técnico.',
          'Benchmark competitivo aplicado a pricing, adquisición y propuesta de valor.',
        ],
        en: [
          'E-commerce and landing delivered as design ready for development — digital quoting without a payment gateway.',
          'Smart form designed to reduce data entry and drop-off; research projection ~12–15 min → ~8–10 min (digital insurance benchmark, not a business target).',
          'Landing with lead capture, plan comparison, and coverage, exclusions, and FAQ sections.',
          'Product architecture connecting quoting, benefits, and end-to-end e-commerce flow.',
          'Salesforce data format specified in design for technical handoff.',
          'Competitive benchmark applied to pricing, acquisition, and value proposition.',
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
          'En productos sensibles como seguros de sepelio, la transparencia en coberturas y exclusiones es tan crítica como simplificar el formulario.',
          'Mapear el flujo end-to-end antes de diseñar pantallas evita retrabajo en ramificaciones (plan individual vs. familiar, detección por sistema).',
          'Las estimaciones de tiempo del research orientan priorización — no sustituyen validación post-launch.',
          'Coordinación temprana con desarrollo fue clave para especificar integraciones (Salesforce) sin bloquear el diseño.',
          'El benchmark competitivo ayudó a posicionar soporte post venta y claridad de valor como diferenciadores reales.',
        ],
        en: [
          'In sensitive products like funeral insurance, transparency on coverage and exclusions is as critical as simplifying the form.',
          'Mapping the end-to-end flow before designing screens prevents rework on branches (individual vs. family plan, system detection).',
          'Research time estimates guide prioritization — they do not replace post-launch validation.',
          'Early coordination with development was key to specify integrations (Salesforce) without blocking design.',
          'Competitive benchmarking helped position post-sale support and value clarity as real differentiators.',
        ],
      },
    },
  ],
  relatedSlugs: ['project_4', 'project_1'],
};
