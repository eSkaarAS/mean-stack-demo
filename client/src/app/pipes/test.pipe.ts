import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

export const stringPipes = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
} as const;

type StringPipe = (typeof stringPipes)[keyof typeof stringPipes];

export const object: Record<StringPipe, PipeTransform> = {
  uppercase: new UpperCasePipe(),
  lowercase: new LowerCasePipe(),
};

@Pipe({
  name: 'stringPipe',
})
export class TestPipe implements PipeTransform {
  transform(value: string, pipeOption: StringPipe[]): string {
    const selectedPipe = object[pipeOption[0]];
    const result = selectedPipe.transform(value);

    return result;
  }
}
