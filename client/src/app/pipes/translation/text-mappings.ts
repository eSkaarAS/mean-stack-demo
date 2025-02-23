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
  'Todos.title': {
    en: 'Todos',
    nb: 'Gjørmål',
  },
  'Todos.hideDone.label': {
    en: 'Hide done',
    nb: 'Skjul ferdig',
  },
  'TodoForm.text.label': {
    en: 'Todo',
    nb: 'Gjørmål',
  },
  'TodoForm.text.error': {
    en: 'This field is required',
    nb: 'Dette feltet er påkrevd',
  },
} as const;

export type TranslationKey = keyof typeof textMappings;
