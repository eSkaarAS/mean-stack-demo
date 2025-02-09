import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routePaths } from '../appRouteTypes';

@Component({
  selector: 'redirect-route-component',
  standalone: true,
  imports: [RouterModule],
  styles: [
    `
      p {
        font-size: 1.5rem;
      }
    `,
  ],
  template: `
    <button
      mat-raised-button
      color="primary"
      [routerLink]="[routePaths.addEmployee]"
    >
      Add a New Employee
    </button>
  `,
})
export class RedirectRouteComponent {
  routePaths = routePaths;
}
