import {
  Component,
  computed,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'chat-window',
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
    `,
  ],
  template: `
    <section
      class="bg-red-200 w-full h-full max-w-5xl mx-auto flex flex-col justify-center items-center"
    >
      <div class="bg-blue-200 w-full h-full"></div>
      <div class="bg-yellow-200 w-full h-20"></div>
    </section>
  `,
})
export class ChatWindow implements OnInit {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() {}

  ngOnInit() {}
}
