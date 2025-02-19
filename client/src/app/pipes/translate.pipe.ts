import {
  computed,
  inject,
  LOCALE_ID,
  Pipe,
  PipeTransform,
} from '@angular/core';
import {
  textMappings,
  TranslationKey,
  TranslationLanguage,
  TranslationLanguages,
} from './text-mappings';

@Pipe({
  name: 'translatePipe',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  locale = inject(LOCALE_ID);
  localeLanguage = computed(
    () => this.locale.split('-')[0] as TranslationLanguage
  );
  isLocaleLanguageSupported = computed(() => {
    return Object.values(TranslationLanguages).includes(this.localeLanguage());
  });

  language = computed(() =>
    this.isLocaleLanguageSupported() ? this.localeLanguage() : 'en'
  );

  transform(key: TranslationKey): string {
    return textMappings[key][this.language()];
  }
}
