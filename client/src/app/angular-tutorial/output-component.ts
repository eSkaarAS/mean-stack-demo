import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'output-component',
  standalone: true,
  styles: [
    `
      p {
        font-size: 1.5rem;
      }
    `,
  ],
  template: ` <button (click)="addItem()">Add Item</button> `,
})
export class OutputComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
