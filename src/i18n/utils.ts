import en from './en.json';
import ar from './ar.json';

export type Lang = 'en' | 'ar';

export const defaultLang: Lang = 'en';

export const languages = {
  en: 'English',
  ar: 'العربية'
};

const translations = {
  en,
  ar
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ar') return 'ar';
  return 'en';
}

export function useTranslations(lang: Lang) {
  const dict = translations[lang] || translations[defaultLang];
  return function t(key: string): string {
    const parts = key.split('.');
    let current: any = dict;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Fallback to English
        let fallback: any = translations[defaultLang];
        for (const fbPart of parts) {
          if (fallback && typeof fallback === 'object' && fbPart in fallback) {
            fallback = fallback[fbPart];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return typeof current === 'string' ? current : key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Strip existing /ar prefix if present
  let cleanPath = path;
  if (cleanPath.startsWith('/ar/')) {
    cleanPath = cleanPath.slice(3);
  } else if (cleanPath === '/ar') {
    cleanPath = '/';
  }

  if (lang === 'ar') {
    if (cleanPath === '/' || cleanPath === '') {
      return '/ar/';
    }
    return `/ar${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`;
  }

  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
}
