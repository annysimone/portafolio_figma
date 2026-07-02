export type Project = {
  slug: string;
  cover: string;
  client: string;
  year: string;
  role: { es: string; en: string };
  title: { es: string; en: string };
  summary: { es: string; en: string };
  challenge: { es: string; en: string };
  process: { es: string; en: string };
  outcome: { es: string; en: string };
  gallery: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'assi',
    cover: '/assets/projects/assi.jpg',
    client: 'ASSI',
    year: '2024',
    featured: true,
    role: { es: 'UX/UI Designer', en: 'UX/UI Designer' },
    title: {
      es: 'Rediseño de experiencia digital ASSI',
      en: 'ASSI digital experience redesign',
    },
    summary: {
      es: 'Investigación, wireframes y UI para mejorar la navegación y conversión en la plataforma de servicios financieros.',
      en: 'Research, wireframes, and UI to improve navigation and conversion on the financial services platform.',
    },
    challenge: {
      es: 'Usuarios con dificultad para completar flujos clave y baja claridad en tasas, comisiones y beneficios del producto.',
      en: 'Users struggled to complete key flows with low clarity around rates, fees, and product benefits.',
    },
    process: {
      es: 'Mapeo AS-IS, HMW, wireframes iterativos, pruebas de usabilidad y sistema de componentes para handoff.',
      en: 'AS-IS mapping, HMW workshops, iterative wireframes, usability testing, and component system for handoff.',
    },
    outcome: {
      es: 'Interfaz más clara con jerarquía visual mejorada y flujos simplificados listos para desarrollo.',
      en: 'Clearer interface with improved visual hierarchy and simplified flows ready for development.',
    },
    gallery: [
      '/assets/projects/assi.jpg',
      '/assets/figma/a322c2a2730548436fc1d7507b6a89bba830f400',
      '/assets/figma/30cfe22b549ac814d5c5e3650bf01b4b6536407b',
    ],
  },
  {
    slug: 'appcres',
    cover: '/assets/projects/appcres.jpg',
    client: 'AppCres',
    year: '2024',
    featured: true,
    role: { es: 'Product Designer', en: 'Product Designer' },
    title: {
      es: 'Plataforma AppCres — gestión y calculadora',
      en: 'AppCres platform — management & calculator',
    },
    summary: {
      es: 'Diseño de dashboard, calculadora y flujos de creación de cuentas para una plataforma de crecimiento empresarial.',
      en: 'Dashboard, calculator, and account creation flows for a business growth platform.',
    },
    challenge: {
      es: 'Procesos manuales dispersos y falta de visibilidad sobre indicadores de conversión para equipos comerciales.',
      en: 'Scattered manual processes and lack of visibility on conversion metrics for sales teams.',
    },
    process: {
      es: 'Research con personas, empathy maps, JTBD, prototipos de dashboard y validación de flujos críticos.',
      en: 'Persona research, empathy maps, JTBD, dashboard prototypes, and validation of critical flows.',
    },
    outcome: {
      es: 'Experiencia unificada con dashboard accionable, calculadora integrada y flujos de onboarding optimizados.',
      en: 'Unified experience with actionable dashboard, integrated calculator, and optimized onboarding flows.',
    },
    gallery: [
      '/assets/projects/appcres.jpg',
      '/assets/figma/f5315e57c9808491a04ea8486a67a22656928dd8',
      '/assets/figma/a2a043667ead736ba0f80125c03be39df0770689',
    ],
  },
  {
    slug: 'pacifico-seguros',
    cover: '/assets/projects/pacifico.jpg',
    client: 'Pacífico Seguros',
    year: '2023',
    featured: true,
    role: { es: 'UX/UI Designer', en: 'UX/UI Designer' },
    title: {
      es: 'Seguro de Sepelio — ecommerce & landing',
      en: 'Funeral insurance — ecommerce & landing',
    },
    summary: {
      es: 'Diseño responsive de landing y flujo ecommerce para contratación digital de seguro de sepelio.',
      en: 'Responsive landing and ecommerce flow design for digital funeral insurance enrollment.',
    },
    challenge: {
      es: 'Tema sensible que requiere claridad, confianza y simplicidad en mobile y desktop.',
      en: 'Sensitive topic requiring clarity, trust, and simplicity on mobile and desktop.',
    },
    process: {
      es: 'Journey AS-IS, sitemap, wireframes mobile-first y UI de alta fidelidad para ecommerce.',
      en: 'AS-IS journey, sitemap, mobile-first wireframes, and high-fidelity ecommerce UI.',
    },
    outcome: {
      es: 'Experiencia empática y conversion-oriented con interfaces desktop y mobile coherentes.',
      en: 'Empathetic, conversion-oriented experience with coherent desktop and mobile interfaces.',
    },
    gallery: [
      '/assets/projects/pacifico.jpg',
      '/assets/figma/305912d0d233ea079dfd9f305e08586ae3cab4f6',
      '/assets/figma/5623d52417dad3baa36511f4364716e9b70804d7',
    ],
  },
  {
    slug: 'appcres-web',
    cover: '/assets/projects/appcres-web.jpg',
    client: 'AppCres',
    year: '2024',
    featured: false,
    role: { es: 'UX/UI Designer', en: 'UX/UI Designer' },
    title: {
      es: 'Sitio web AppCres',
      en: 'AppCres marketing website',
    },
    summary: {
      es: 'Homepage responsive con propuesta de valor clara y navegación optimizada para captación de leads.',
      en: 'Responsive homepage with clear value proposition and navigation optimized for lead capture.',
    },
    challenge: {
      es: 'Comunicar el valor del producto de forma rápida en desktop y mobile sin sobrecargar al usuario.',
      en: 'Communicate product value quickly on desktop and mobile without overwhelming users.',
    },
    process: {
      es: 'Benchmark, arquitectura de información, diseño visual y variantes mobile/tablet/desktop.',
      en: 'Benchmark, information architecture, visual design, and mobile/tablet/desktop variants.',
    },
    outcome: {
      es: 'Sitio claro y profesional alineado a la identidad de marca y objetivos comerciales.',
      en: 'Clear, professional site aligned with brand identity and commercial goals.',
    },
    gallery: ['/assets/projects/appcres-web.jpg'],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
