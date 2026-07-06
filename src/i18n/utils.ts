import { defaultLang, type Lang } from './config';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'en') return 'en';
  return defaultLang;
}

/** Build a localized path. `path` must start with `/` (e.g. `/about`, `/project_1`). */
export function localizedPath(path: string, lang: Lang): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return normalized;
  return normalized === '/' ? '/en/' : `/en${normalized}`;
}

/** Swap language while preserving the current page. */
export function alternateLangPath(pathname: string, targetLang: Lang): string {
  const isEn = pathname.startsWith('/en');
  const base = isEn ? pathname.replace(/^\/en/, '') || '/' : pathname;
  return localizedPath(base, targetLang);
}

export function pick<T>(value: { es: T; en: T }, lang: Lang): T {
  return value[lang];
}
