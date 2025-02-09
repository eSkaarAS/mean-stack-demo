import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  template: `
    <div>
      <h1 class="text-5xl">Tailwind implemented</h1>
      <p class="text-2xl">This really should be easy</p>
    </div>
  `,
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
