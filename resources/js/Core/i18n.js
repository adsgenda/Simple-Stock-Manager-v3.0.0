import en from '@lang/en.json';
import { createI18n } from 'vue-i18n';
import languages from '@lang/languages.json';

const messages = { en };
export const LANGUAGES = languages.available;
export const SUPPORT_LOCALES = languages.available.map(l => l.value).filter(l => l != 'en');

const i18n = createI18n({
  messages,
  legacy: false,
  missingWarn: true,
  mode: 'composition',
  fallbackWarn: false,
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  locale: window.Locale || 'en',
  missing: (locale, key) => {
    console.log(key, locale);
  },
});

export default i18n;
