import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'ob-chat-window',
  styles: [
    `
      .flexDiv {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #f5f5f5;
        gap: 1rem;
      }

      .testerInnerClass {
        background-color: #f5f5f5;
      }
    `,
  ],
  imports: [MatRadioModule],
  template: `
    <section
      class=" bg-primary w-full h-full max-w-5xl mx-auto flex flex-col justify-center items-center"
    >
      <div class=" bg-primary w-full h-full testerInnerClass">
        <mat-radio-group aria-label="Select an option">
          <mat-radio-button value="1">Option 1</mat-radio-button>
          <mat-radio-button value="2">Option 2</mat-radio-button>
        </mat-radio-group>
      </div>
      <div class="bg-secondary w-full h-20"></div>
    </section>
  `,
})
export class ChatWindow {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
}
