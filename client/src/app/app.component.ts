import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DemoSidebar } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'ob-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    DemoSidebar,
    MainLayoutComponent,
    MatIconModule,
    MatSidenavModule,
  ],
  template: `
    <ob-demo-sidebar>
      <ob-main-layout>
        <router-outlet></router-outlet>
      </ob-main-layout>
    </ob-demo-sidebar>
  `,
})
export class AppComponent {}
