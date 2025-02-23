import { inject, Pipe, PipeTransform, signal } from '@angular/core';
import { LanguageService, TranslationLanguage } from '../locale.service';
import { textMappings, TranslationKey } from './text-mappings';

@Pipe({
  name: 'translatePipe',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  languageService = inject(LanguageService);

  language = signal<TranslationLanguage>(
    this.languageService.selectedLanguage()
  );

  transform(key: TranslationKey) {
    return textMappings[key][this.language()];
  }
}
