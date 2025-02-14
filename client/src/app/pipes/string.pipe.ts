import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

export const stringPipes = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
} as const;

type StringPipeType = (typeof stringPipes)[keyof typeof stringPipes];

export const object: Record<StringPipeType, PipeTransform> = {
  uppercase: new UpperCasePipe(),
  lowercase: new LowerCasePipe(),
};

@Pipe({
  name: 'stringPipe',
})
export class StringPipe implements PipeTransform {
  transform(value: string, pipeOption: StringPipeType[]): string {
    const selectedPipe = object[pipeOption[0]];
    const result = selectedPipe.transform(value);

    return result;
  }
}
