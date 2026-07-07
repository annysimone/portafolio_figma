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
      es: 'Seguro de Sepelio — Pacífico Seguros 2025',
      en: 'Funeral insurance — Pacífico Seguros 2025',
    },
  },
  header: {
    year: { es: '2025', en: '2025' },
    title: { es: 'Seguro de Sepelio.', en: 'Funeral insurance.' },
    subtitle: { es: 'Pacífico Seguros', en: 'Pacífico Seguros' },
    accent: '#ab0782',
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
        es: 'La venta de Seguro de Sepelio por el canal de Telemarketing fue pausada temporalmente. Solo se mantuvo una landing page informativa en la web principal de Pacífico Seguros que no generaba leads ni conversión, lo que representaba oportunidades perdidas de cotización de dicho producto.',
        en: 'Funeral insurance sales via the telemarketing channel were temporarily paused. Only an informational landing page remained on Pacífico Seguros\' main website—it generated no leads or conversion, representing lost quoting opportunities for the product.',
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
            es: 'Actual tiempo de llenado estimado es 15 min aprox.',
            en: 'Current estimated fill time is approximately 15 minutes.',
          },
        },
        {
          title: {
            es: 'Reducir % de abandono',
            en: 'Reduce abandonment rate',
          },
          body: {
            es: 'Hay sobrecarga cognitiva durante el llenado del formulario.',
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
              '↓ Time to Complete a 5-8 min.',
            ],
            en: [
              '↑ Form completion rate (by step)',
              '↓ Time to complete to 5-8 min.',
            ],
          },
          postIt: {
            es: 'Integré el formato de datos al estándar de Salesforce.',
            en: 'Integrated data format to Salesforce standards.',
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
            es: 'Como diferencial competitivo (escenarios de uso y FAQ\'s).',
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
        es: 'Formulario inteligente con data por default según identificación del sistema, indicador de progreso, botón fijo en footer con guardado automático, e input search intuitivo para datos domiciliarios.',
        en: 'Smart form with default data from system identification, progress indicator, fixed footer button with auto-save, and intuitive search input for address data.',
      },
    },
    {
      type: 'gallery',
      layout: 'stack',
      images: [
        {
          src: `${P}/solucion-ecommerce-mobile.png`,
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
        es: 'Landing con cotización por DNI, comparativa de planes Individual y Familiar, y secciones de coberturas, exclusiones y FAQs.',
        en: 'Landing with ID-based quoting, Individual and Family plan comparison, and coverage, exclusions, and FAQ sections.',
      },
    },
    {
      type: 'gallery',
      layout: 'stack',
      images: [
        {
          src: `${P}/solucion-web-mobile.png`,
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
          'E-commerce con formulario inteligente orientado a reducir el llenado de ~15 min hacia 5–8 min.',
          'Landing con captura de leads, comparativa de planes y secciones de cobertura y FAQs.',
          'Arquitectura de producto conectando cotización, beneficios y flujo e-commerce.',
          'Benchmark competitivo aplicado a pricing, adquisición y propuesta de valor.',
        ],
        en: [
          'E-commerce with smart form design targeting fill time reduction from ~15 min toward 5–8 min.',
          'Landing with lead capture, plan comparison, and coverage and FAQ sections.',
          'Product architecture connecting quoting, benefits, and e-commerce flow.',
          'Competitive benchmark applied to pricing, acquisition, and value proposition.',
        ],
      },
    },
  ],
  relatedSlugs: ['project_4', 'project_1'],
};
