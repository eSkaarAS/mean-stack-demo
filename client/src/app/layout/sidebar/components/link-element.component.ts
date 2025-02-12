import { Component, input, signal } from '@angular/core';
import { RoutePath, routePaths } from '../../../appRouteTypes';

@Component({
  selector: 'app-link-element',
  template: `<a href="{{ href() }}" class="text-3xl bg-amber-400">{{
    title()
  }}</a>`,
})
export class LinkElementComponent {
  href = signal<RoutePath>(routePaths.home);
  title = input.required<string>();
}
