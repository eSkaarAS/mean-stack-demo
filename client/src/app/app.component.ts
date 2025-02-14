import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DemoSidebar } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, DemoSidebar, MainLayoutComponent],
  template: `
    <demo-sidebar>
      <app-main-layout>
        <router-outlet></router-outlet>
      </app-main-layout>
    </demo-sidebar>
  `,
})
export class AppComponent {}
