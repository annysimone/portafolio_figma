/** Rutas públicas legibles por case study (slug interno → path). */
export const caseStudyPaths: Record<string, string> = {
  project_1: '/work/interbank-assi',
  project_2: '/work/appcres',
  project_3: '/work/pacifico-sepelio',
  project_4: '/work/tom-3-pacifico',
};

/** Segmento de URL sin prefijo /work/ (para getStaticPaths). */
export const caseStudyPathSegments = Object.fromEntries(
  Object.entries(caseStudyPaths).map(([slug, path]) => [slug, path.replace('/work/', '')]),
) as Record<string, string>;

/** Mapa inverso: segmento → slug interno. */
export const studySlugFromSegment: Record<string, string> = Object.fromEntries(
  Object.entries(caseStudyPathSegments).map(([slug, segment]) => [segment, slug]),
);

/** Rutas legacy que redirigen a las nuevas (301). */
export const legacyCaseStudyRedirects: Record<string, string> = {
  '/project_1': caseStudyPaths.project_1,
  '/project_2': caseStudyPaths.project_2,
  '/project_3': caseStudyPaths.project_3,
  '/project_4': caseStudyPaths.project_4,
};
