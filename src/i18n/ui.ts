import type { Lang } from './config';

export const ui = {
  es: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Conversemos',
      themeLight: 'Modo claro',
      themeDark: 'Modo oscuro',
      langSwitch: 'Cambiar idioma',
    },
    home: {
      title: 'Anny Mamani — Product Designer',
      description:
        'Product Designer en fintech, seguros y plataformas internas. Casos de estudio en Interbank, Pacífico Seguros y ACRES.',
      intro:
        'Diseño productos digitales en industrias reguladas: transformo procesos complejos en experiencias claras, medibles y centradas en el usuario.',
      view: 'Ver',
      inProgress: 'En proceso',
    },
    about: {
      title: 'About — Anny Mamani',
      description:
        'Product Designer en industrias reguladas —banca, seguros y mercado de capitales—, con casos en Interbank, Pacífico Seguros y ACRES.',
      intro:
        'Soy Product Designer enfocada en plataformas digitales de industrias reguladas: banca, seguros y mercado de capitales.',
      body: 'Diseño productos para entornos regulados y de alta complejidad, donde las reglas de negocio y las integraciones tecnológicas pesan tanto como la experiencia del usuario. En Interbank (2020–2024) colaboré en el diseño de ASSI, su plataforma de venta y bandejas de gestión interna; en Pacífico Seguros (2025) trabajé en el canal digital del Seguro de Sepelio y en TOM 3.0, plataforma interna de gestión de horas y tareas; y en ACRES (2019) diseñé AppCres, una plataforma de inversiones en el mercado de capitales.\n\nMi enfoque combina el entendimiento profundo de lógicas y sistemas internos con el trabajo diario junto a equipos multidisciplinarios —desarrollo, líderes técnicos, business analysts y product owners— y el aprendizaje directo de los usuarios finales. Traduzco procesos complejos en experiencias claras, medibles y accionables.',
      contactTitle: 'Conversemos...',
      mail: 'mail:',
      phone: 'cel:',
      cv: 'Descargar CV (PDF)',
      projectsTitle: 'Mis proyectos',
    },
    caseStudy: {
      overview: 'Overview',
      challenge: 'Challenge',
      process: 'Proceso',
      solutions: 'Soluciones',
      learnings: 'Aprendizajes',
      moreProjects: 'Más proyectos',
      prevProject: 'Anterior',
      nextProject: 'Siguiente',
    },
    footer: {
      email: 'Email',
      behance: 'Behance',
      linkedin: 'LinkedIn',
      rights: '© 2026 Anny Mamani · Product Designer. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Let\'s talk',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
      langSwitch: 'Switch language',
    },
    home: {
      title: 'Anny Mamani — Product Designer',
      description:
        'Product Designer in fintech, insurance, and internal platforms. Case studies at Interbank, Pacífico Seguros, and ACRES.',
      intro:
        'I design digital products in regulated industries—turning complex processes into clear, measurable, user-centered experiences.',
      view: 'View',
      inProgress: 'In progress',
    },
    about: {
      title: 'About — Anny Mamani',
      description:
        'Product Designer across regulated industries —banking, insurance, and capital markets— with case studies at Interbank, Pacífico Seguros, and ACRES.',
      intro:
        'I\'m a Product Designer focused on digital platforms in regulated industries: banking, insurance, and capital markets.',
      body: 'I design products for regulated, high-complexity environments, where business rules and technology integrations matter as much as the user experience. At Interbank (2020–2024) I collaborated on the design of ASSI, its sales platform and internal management queues; at Pacífico Seguros (2025) I worked on the digital channel for funeral insurance and on TOM 3.0, an internal time- and task-management platform; and at ACRES (2019) I designed AppCres, an investment platform for the capital markets.\n\nMy approach combines a deep understanding of internal systems and logic with daily collaboration alongside multidisciplinary teams —developers, technical leads, business analysts, and product owners— and direct learning from end users. I turn complex processes into clear, measurable, actionable experiences.',
      contactTitle: 'Let\'s talk...',
      mail: 'mail:',
      phone: 'phone:',
      cv: 'Download résumé (PDF)',
      projectsTitle: 'My projects',
    },
    caseStudy: {
      overview: 'Overview',
      challenge: 'Challenge',
      process: 'Process',
      solutions: 'Solutions',
      learnings: 'Learnings',
      moreProjects: 'More projects',
      prevProject: 'Previous',
      nextProject: 'Next',
    },
    footer: {
      email: 'Email',
      behance: 'Behance',
      linkedin: 'LinkedIn',
      rights: '© 2026 Anny Mamani · Product Designer. All rights reserved.',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
