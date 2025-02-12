import { Injectable, signal } from '@angular/core';

type Test = {
  test: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class TestService {
  test = signal<Test | null>(null);
}
