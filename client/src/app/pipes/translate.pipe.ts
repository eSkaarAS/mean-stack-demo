import { LOCALE_ID, Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationKey } from './text-mappings';

@Pipe({
  name: 'translatePipe',
  pure: true,
})
export class TranslatePipe implements PipeTransform {
  locale: string = inject(LOCALE_ID);

  transform(key: TranslationKey): string {
    return key + this.locale;
  }
}
