import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DemoSidebar } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    DemoSidebar,
    MainLayoutComponent,
    MatIconModule,
    MatSidenavModule,
  ],
  template: `
    <demo-sidebar>
      <app-main-layout>
        <router-outlet></router-outlet>
      </app-main-layout>
    </demo-sidebar>
  `,
})
export class AppComponent {
  opened = signal(true);

  toggleSidebar() {
    this.opened.update((v) => !v);
  }
}
