export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      work: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Diseño UX/UI',
      title: 'Creo experiencias digitales claras, humanas y orientadas a resultados.',
      subtitle:
        'Diseñadora de producto con enfoque en investigación, sistemas de diseño y soluciones para fintech, seguros y plataformas B2B.',
      cta: 'Ver proyectos',
      ctaSecondary: 'Contactar',
    },
    featured: {
      title: 'Proyectos destacados',
      subtitle: 'Casos de diseño end-to-end: research, UI, prototipado y handoff.',
      viewAll: 'Ver todos',
      viewCase: 'Ver caso',
    },
    services: {
      title: 'Cómo trabajo',
      items: [
        {
          title: 'Research & estrategia',
          description:
            'Entrevistas, journey maps y definición de problemas para alinear negocio y usuario.',
        },
        {
          title: 'Diseño de interfaz',
          description:
            'Wireframes, UI de alta fidelidad y design systems escalables en Figma.',
        },
        {
          title: 'Validación & handoff',
          description:
            'Prototipos, pruebas de usabilidad y documentación lista para desarrollo.',
        },
      ],
    },
    about: {
      title: 'Acerca de mí',
      intro:
        'Soy diseñadora UX/UI apasionada por transformar procesos complejos en experiencias simples. He trabajado en proyectos para sector financiero, seguros y plataformas digitales en Perú y Latinoamérica.',
      skillsTitle: 'Habilidades',
      skills: [
        'UX Research',
        'UI Design',
        'Design Systems',
        'Prototipado',
        'Figma',
        'Design Thinking',
      ],
      experienceTitle: 'Experiencia',
      experience: [
        {
          role: 'UX/UI Designer',
          company: 'Proyectos freelance & consultoría',
          period: '2022 — presente',
        },
        {
          role: 'Product Designer',
          company: 'Sector financiero & seguros',
          period: '2020 — 2024',
        },
      ],
    },
    work: {
      title: 'Proyectos',
      subtitle: 'Selección de casos de diseño de producto digital.',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto o quieres colaborar? Escríbeme.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      emailLabel: 'Correo',
      linkedin: 'LinkedIn',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      built: 'Reconstruido desde Figma Sites con Astro.',
    },
    project: {
      role: 'Rol',
      client: 'Cliente',
      year: 'Año',
      overview: 'Resumen',
      challenge: 'Desafío',
      process: 'Proceso',
      outcome: 'Resultado',
      back: 'Volver a proyectos',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'UX/UI Design',
      title: 'I craft clear, human-centered digital experiences that drive results.',
      subtitle:
        'Product designer focused on research, design systems, and solutions for fintech, insurance, and B2B platforms.',
      cta: 'View projects',
      ctaSecondary: 'Get in touch',
    },
    featured: {
      title: 'Featured work',
      subtitle: 'End-to-end design cases: research, UI, prototyping, and handoff.',
      viewAll: 'View all',
      viewCase: 'View case',
    },
    services: {
      title: 'How I work',
      items: [
        {
          title: 'Research & strategy',
          description:
            'Interviews, journey maps, and problem framing to align business and user goals.',
        },
        {
          title: 'Interface design',
          description:
            'Wireframes, high-fidelity UI, and scalable design systems in Figma.',
        },
        {
          title: 'Validation & handoff',
          description:
            'Prototypes, usability testing, and dev-ready documentation.',
        },
      ],
    },
    about: {
      title: 'About me',
      intro:
        'I am a UX/UI designer passionate about turning complex processes into simple experiences. I have worked on financial services, insurance, and digital platforms across Latin America.',
      skillsTitle: 'Skills',
      skills: [
        'UX Research',
        'UI Design',
        'Design Systems',
        'Prototyping',
        'Figma',
        'Design Thinking',
      ],
      experienceTitle: 'Experience',
      experience: [
        {
          role: 'UX/UI Designer',
          company: 'Freelance & consulting projects',
          period: '2022 — present',
        },
        {
          role: 'Product Designer',
          company: 'Financial services & insurance',
          period: '2020 — 2024',
        },
      ],
    },
    work: {
      title: 'Work',
      subtitle: 'A selection of digital product design case studies.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project or want to collaborate? Reach out.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      emailLabel: 'Email',
      linkedin: 'LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Rebuilt from Figma Sites with Astro.',
    },
    project: {
      role: 'Role',
      client: 'Client',
      year: 'Year',
      overview: 'Overview',
      challenge: 'Challenge',
      process: 'Process',
      outcome: 'Outcome',
      back: 'Back to projects',
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}
