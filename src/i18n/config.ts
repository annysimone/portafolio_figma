export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';

export const langLabels: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
};
