import type { Lang } from '../../i18n/config';

export type Localized<T> = Record<Lang, T>;

export type ProjectPreview = {
  id: string;
  slug: string;
  year: Localized<string>;
  subtitle?: Localized<string>;
  title: Localized<string>;
  image: string;
  imageAlt: Localized<string>;
  href: string;
  accent: string;
  borderAccent: string;
  status?: 'published' | 'in-progress';
  featuredOnAbout?: boolean;
  aboutLabel?: Localized<string>;
  aboutImage?: string;
};

export type CardItem = {
  title?: Localized<string>;
  body?: Localized<string>;
  /** Líneas apiladas en el cuerpo de la tarjeta */
  bodyLines?: Localized<string[]>;
  /** Nota adhesiva tipo post-it sobre la tarjeta */
  postIt?: Localized<string>;
  /** Bullets bajo el título del post-it */
  postItLines?: Localized<string[]>;
  /** Post-its de indicadores KPI (variante postitsKpi) */
  indicators?: Localized<string[]>;
  /** Color de acento para fondo suave (hex) */
  tint?: string;
  /** Fondo sólido amarillo post-it */
  fill?: 'yellow';
};

export type PhaseColumn = {
  title: Localized<string>;
  subtitle: Localized<string>;
  items: Localized<string[]>;
  accent?: string;
};

export type DiscoveryColumn = {
  title: Localized<string>;
  body: Localized<string>;
  /** Etiqueta sobre los hallazgos (p. ej. FINDINGS); omitir si no aplica */
  findingsLabel?: Localized<string>;
  findings: Localized<string[]>;
  footnote?: Localized<string>;
};

export type HmwRow = {
  userNeed: Localized<string>;
  hmw: Localized<string>;
  guidelines: Localized<string>;
  features: Localized<string[]>;
};

export type CaseStudyBlock =
  | { type: 'heading'; level: 2 | 3 | 4; text: Localized<string> }
  | { type: 'paragraph'; text: Localized<string> }
  | { type: 'list'; items: Localized<string[]>; ordered?: boolean }
  | {
      type: 'cards';
      title?: Localized<string>;
      items: CardItem[];
      variant?: 'default' | 'impact' | 'row3' | 'pair' | 'postitsRef' | 'postitsKpi';
      /** Fondo de cards en variante postitsRef */
      postitsTheme?: 'yellow' | 'impact';
      /** Reduce el ancho respecto al contenedor (px), centrado */
      widthReduce?: number;
      /** Espacio adicional superior (px) respecto al margen estándar del flujo */
      extraSpacingTop?: number;
    }
  | { type: 'phases'; items: PhaseColumn[] }
  | {
      type: 'discoveryFlow';
      title: Localized<string>;
      columns: DiscoveryColumn[];
      /** Ancho máximo del diagrama (px) */
      maxWidth?: number;
    }
  | { type: 'hmwTable'; rows: HmwRow[] }
  | {
      type: 'image';
      src: string;
      alt: Localized<string>;
      title?: Localized<string>;
      /** Muestra etiqueta "Referencia visual" para comparar con HTML */
      reference?: boolean;
      /** Ancho fijo máximo en px */
      maxWidth?: number;
      /** Reduce el ancho respecto al contenedor (px) */
      widthReduce?: number;
      /** Espacio adicional superior (px) respecto al margen estándar del flujo */
      extraSpacingTop?: number;
    }
  | {
      type: 'gallery';
      title?: Localized<string>;
      layout?: 'carousel' | 'stack';
      images: {
        src: string;
        alt: Localized<string>;
        caption?: Localized<string>;
        reference?: boolean;
        /** Imagen desktop: más ancho + opción de ampliar */
        wide?: boolean;
      }[];
    };

export type CaseStudySection = {
  id: string;
  title: Localized<string>;
  blocks: CaseStudyBlock[];
};

export type CaseStudyHeader = {
  year: Localized<string>;
  title: Localized<string>;
  subtitle: Localized<string>;
  accent?: string;
};

/** Sequential narrative — preferred for full case studies. */
export type CaseStudy = {
  slug: string;
  meta: {
    title: Localized<string>;
    description: Localized<string>;
  };
  header?: CaseStudyHeader;
  blocks?: CaseStudyBlock[];
  /** @deprecated Use blocks for new case studies */
  overview?: Localized<string>;
  sections?: CaseStudySection[];
  learnings?: Localized<string[]>;
  gallery?: string[];
  relatedSlugs: string[];
};
