import { Component, input } from '@angular/core';
import { RoutePath } from '../../appRouteTypes';

@Component({
  selector: 'app-link-element',
  template: `<a href="{{ href() }}" class="">{{ title() }}</a>`,
})
export class LinkElementComponent {
  href = input.required<RoutePath>();
  title = input.required<string>();
}
