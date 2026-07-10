import type { CaseStudy, ProjectPreview } from './types';
import { caseStudyPaths } from './routes';
import { project1CaseStudy } from './case-studies/project-1';
import { project2CaseStudy } from './case-studies/project-2';
import { project3CaseStudy } from './case-studies/project-3';
import { project4CaseStudy } from './case-studies/project-4';

export const contact = {
  email: 'annysimone@gmail.com',
  phone: '+51 949 295 796',
  phoneHref: 'tel:+51949295796',
  whatsappHref: 'https://wa.me/51949295796',
  behance: 'https://www.behance.net/AnnyMamani',
  linkedin: 'https://www.linkedin.com/in/amamanigue/',
};

/** Preview al compartir Home / About (1200×630). */
export const portfolioOgImage = '/og-image.png';

/** CV descargable por idioma. Colocar los PDF en public/cv/. */
export const cvHref: Record<'es' | 'en', string> = {
  es: '/cv/Anny_Mamani_CV_ES.pdf',
  en: '/cv/Anny_Mamani_CV_EN.pdf',
};

export const homeProjects: ProjectPreview[] = [
  {
    id: 'pacifico-sepelio',
    slug: 'project_3',
    year: { es: '2025', en: '2025' },
    title: { es: 'Pacífico Seguros', en: 'Pacífico Seguros' },
    image: '/assets/original/home-pacifico.png',
    imageAlt: {
      es: 'Pacífico Seguros — Seguro de Sepelio',
      en: 'Pacífico Seguros — Funeral insurance',
    },
    href: caseStudyPaths.project_3,
    accent: '#ab0782',
    borderAccent: '#6e660a',
    featuredOnAbout: true,
    aboutLabel: { es: 'Seguro de Sepelio', en: 'Funeral insurance' },
    aboutImage: '/assets/original/about-pacifico.png',
  },
  {
    id: 'gestion-horas',
    slug: 'project_4',
    year: { es: '2025', en: '2025' },
    title: { es: 'TOM 3.0 Pacífico', en: 'TOM 3.0 Pacífico' },
    image: '/assets/original/home-gestion-horas.png',
    imageAlt: {
      es: 'Gestión de horas y tareas — TOM 3.0',
      en: 'Time and task management — TOM 3.0',
    },
    href: caseStudyPaths.project_4,
    accent: '#0034ad',
    borderAccent: '#0034ad',
    featuredOnAbout: true,
    aboutLabel: {
      es: 'Plataforma de gestión de horas y tareas',
      en: 'Time and task management platform',
    },
    aboutImage: '/assets/original/about-gestion-horas.png',
  },
  {
    id: 'interbank',
    slug: 'project_1',
    year: { es: '2020-2024', en: '2020-2024' },
    title: { es: 'Interbank', en: 'Interbank' },
    image: '/assets/original/home-interbank.png',
    imageAlt: { es: 'Interbank ASSI', en: 'Interbank ASSI' },
    href: caseStudyPaths.project_1,
    accent: '#6e660a',
    borderAccent: '#ab0782',
    featuredOnAbout: true,
    aboutLabel: { es: 'ASSI plataforma de venta', en: 'ASSI sales platform' },
    aboutImage: '/assets/projects/assi.jpg',
  },
  {
    id: 'appcres',
    slug: 'project_2',
    year: { es: '2019', en: '2019' },
    title: { es: 'AppCres', en: 'AppCres' },
    image: '/assets/original/home-appcres.png',
    imageAlt: { es: 'AppCres — plataforma de inversiones', en: 'AppCres — investment platform' },
    href: caseStudyPaths.project_2,
    accent: '#0034ad',
    borderAccent: '#0034ad',
    aboutLabel: {
      es: 'Plataforma de gestión de inversiones',
      en: 'Investment management platform',
    },
    aboutImage: '/assets/projects/appcres.jpg',
  },
  {
    id: 'appcress',
    slug: 'appcress',
    year: { es: '2019', en: '2019' },
    title: { es: 'AppCress', en: 'AppCress' },
    image: '/assets/original/home-appcress.png',
    imageAlt: { es: 'AppCress', en: 'AppCress' },
    href: '#',
    accent: 'var(--color-text)',
    borderAccent: '#6e660a',
    status: 'in-progress',
  },
];

export const aboutFeaturedProjects = ['project_1', 'project_4', 'project_3']
  .map((slug) => homeProjects.find((p) => p.slug === slug))
  .filter((p): p is ProjectPreview => Boolean(p));

export const caseStudies: Record<string, CaseStudy> = {
  project_1: project1CaseStudy,
  project_2: project2CaseStudy,
  project_3: project3CaseStudy,
  project_4: project4CaseStudy,
};

/** Related projects footer — matches Figma Site per case study page. */
export const moreProjectsBySlug: Record<string, string[]> = {
  project_1: ['project_4', 'project_3'],
  project_2: ['project_4', 'project_1'],
  project_3: ['project_4', 'project_1'],
  project_4: ['project_1', 'project_3'],
};

export function getMoreProjects(currentSlug: string): string[] {
  return moreProjectsBySlug[currentSlug] ?? [];
}

/** Orden de recorrido de proyectos para la navegación anterior/siguiente. */
export const projectOrder = ['project_1', 'project_2', 'project_3', 'project_4'];

export function getAdjacentProjects(slug: string): { prev?: string; next?: string } {
  const index = projectOrder.indexOf(slug);
  if (index === -1) return {};
  const total = projectOrder.length;
  return {
    prev: projectOrder[(index - 1 + total) % total],
    next: projectOrder[(index + 1) % total],
  };
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getProjectPreview(slug: string): ProjectPreview | undefined {
  return homeProjects.find((p) => p.slug === slug);
}

/** OG / share: misma imagen principal que la tarjeta del Home. */
export function getProjectShareImage(slug: string): string | undefined {
  return getProjectPreview(slug)?.image;
}
