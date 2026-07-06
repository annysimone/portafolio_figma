import type { Lang } from './config';

export const ui = {
  es: {
    nav: {
      home: 'Home',
      about: 'About',
      themeLight: 'Modo claro',
      themeDark: 'Modo oscuro',
      langSwitch: 'Cambiar idioma',
    },
    home: {
      title: 'Anny Mamani — Product Designer',
      description:
        'Soy Anny Mamani, Product Designer con mucho enfoque en procesos.',
      intro:
        'Soy Anny Mamani, Product Designer con mucho enfoque en procesos. Me encanta transformar ideas y procesos complejos en productos digitales intuitivos y centrados en el usuario.',
      view: 'Ver',
      inProgress: 'En proceso',
    },
    about: {
      title: 'About — Anny Mamani',
      description:
        'Soy diseñadora de productos digitales enfocada en plataformas de gestión interna.',
      intro:
        'Soy diseñadora de productos digitales enfocada en plataformas de gestión interna.',
      body: 'He colaborado activamente en el proyecto ASSI, la plataforma de venta de Interbank. Este proyecto presentó desafíos significativos debido a la complejidad de sus procesos, el entendimiento de las reglas de negocio y las múltiples integraciones tecnológicas que implicaba su funcionamiento.\n\nEsta experiencia me ha permitido adquirir conocimientos sobre lógicas y sistemas internos integrados. He tenido la oportunidad de interactuar diariamente con equipos multidisciplinarios incluyendo: equipos de desarrollo, Líderes técnicos, Business Analysts, Product Owners y aprender de los Ejecutivos de ventas y Supervisores, nuestros usuarios finales.',
      contactTitle: 'Conversemos...',
      mail: 'mail:',
      phone: 'cel:',
      projectsTitle: 'Mis proyectos',
    },
    caseStudy: {
      overview: 'Overview',
      challenge: 'Challenge',
      process: 'Proceso',
      solutions: 'Soluciones',
      learnings: 'Aprendizajes',
      moreProjects: 'Más proyectos',
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
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
      langSwitch: 'Switch language',
    },
    home: {
      title: 'Anny Mamani — Product Designer',
      description:
        'I am Anny Mamani, a Product Designer with a strong focus on process.',
      intro:
        'I am Anny Mamani, a Product Designer with a strong focus on process. I love turning complex ideas and workflows into intuitive, user-centered digital products.',
      view: 'View',
      inProgress: 'In progress',
    },
    about: {
      title: 'About — Anny Mamani',
      description:
        'Digital product designer focused on internal management platforms.',
      intro:
        'I am a digital product designer focused on internal management platforms.',
      body: 'I actively collaborated on ASSI, Interbank\'s sales platform. The project involved significant challenges due to process complexity, business rule understanding, and the many technology integrations required for it to work.\n\nThis experience helped me build knowledge of integrated internal systems and logic. I worked daily with multidisciplinary teams including developers, technical leads, business analysts, product owners, and learned from sales executives and supervisors—our end users.',
      contactTitle: 'Let\'s talk...',
      mail: 'mail:',
      phone: 'phone:',
      projectsTitle: 'My projects',
    },
    caseStudy: {
      overview: 'Overview',
      challenge: 'Challenge',
      process: 'Process',
      solutions: 'Solutions',
      learnings: 'Learnings',
      moreProjects: 'More projects',
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
