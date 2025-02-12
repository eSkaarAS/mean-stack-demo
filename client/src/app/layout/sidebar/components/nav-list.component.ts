import { Component } from '@angular/core';
import { LinkElementComponent } from './link-element.component';

@Component({
  selector: 'sidebar-nav-list',
  template: ` <nav class="w-full h-44">
    <app-link-element href="chat" title="Dashboard" />
    <app-link-element href="new" title="Messages" />
  </nav>`,

  imports: [LinkElementComponent],
})
export class NavList {}
