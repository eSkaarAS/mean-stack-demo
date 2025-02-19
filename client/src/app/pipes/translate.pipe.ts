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
  language = computed(() => this.locale.split('-')[0] as TranslationLanguage);
  isLanguageSupported = computed(() => {
    return Object.values(TranslationLanguages).includes(this.language());
  });

  transform(key: TranslationKey): string {
    const targetLanguage = this.isLanguageSupported() ? this.language() : 'en';

    return textMappings[key][targetLanguage];
  }
}
