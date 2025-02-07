import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-component',
  standalone: true,
  styles: [
    `
      p {
        font-size: 1.5rem;
      }
    `,
  ],
  template: ` <p>The user's name is {{ name }}</p> `,
})
export class InputComponent {
  @Input() name = '';
}
