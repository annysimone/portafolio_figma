import type { Lang } from '../i18n/config';
import { contact } from '../data/site';

const mailTemplates = {
  es: {
    subject: 'Contacto desde portafolio — Anny Mamani',
    body:
      'Hola Anny,\n\nMe interesa conversar sobre:\n[oportunidad laboral / freelance / colaboración]\n\n— ',
  },
  en: {
    subject: 'Portfolio inquiry — Anny Mamani',
    body:
      "Hi Anny,\n\nI'd like to connect about:\n[job opportunity / freelance / collaboration]\n\n— ",
  },
} as const;

const whatsappTemplates = {
  es: 'Hola Anny, vi tu portafolio y me gustaría conversar contigo.',
  en: 'Hi Anny, I saw your portfolio and would like to connect.',
} as const;

export function mailtoHref(lang: Lang): string {
  const { subject, body } = mailTemplates[lang];
  const params = new URLSearchParams({ subject, body });
  return `mailto:${contact.email}?${params.toString()}`;
}

export function whatsappHref(lang: Lang): string {
  const params = new URLSearchParams({ text: whatsappTemplates[lang] });
  return `${contact.whatsappHref}?${params.toString()}`;
}
