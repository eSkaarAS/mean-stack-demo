export const TranslationLanguages = {
  en: 'en',
  nb: 'nb',
} as const;

export type TranslationLanguage = keyof typeof TranslationLanguages;

type TextMappings = Record<string, Record<TranslationLanguage, string>>;

export const textMappings: TextMappings = {
  Home: {
    en: 'Orgbrain AS',
    nb: 'Orgbrain AS',
  },
} as const;

export type TranslationKey = keyof typeof textMappings;
