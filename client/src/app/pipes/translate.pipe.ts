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
  language = computed(() => this.locale.split('-')[0]);
  isLocaleSupported = computed(() => {
    console.log('this.language()', this.language());
    return Object.values(TranslationLanguages).includes(
      this.language() as TranslationLanguage
    );
  });

  transform(key: TranslationKey): string {
    const test = this.isLocaleSupported() as any;
    console.log('test', test);
    if (!this.isLocaleSupported()) return textMappings[key].en;
    return textMappings[key][this.language() as TranslationLanguage];
  }
}
