import { MediaMatcher } from '@angular/cdk/layout';
import {
  Component,
  OnDestroy,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { routePaths } from '../../appRouteTypes';

@Component({
  selector: 'demo-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrl: 'sidebar.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class DemoSidebar implements OnDestroy {
  protected isMobile = signal(true);
  protected routePaths = routePaths;

  mobileQuery: MediaQueryList | undefined;
  mobileQueryListener: (() => void) | undefined;

  constructor() {
    const media = inject(MediaMatcher);

    afterNextRender(() => {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this.isMobile.set(this.mobileQuery.matches);
      this.mobileQueryListener = () => {
        if (!this.mobileQuery) return;
        this.isMobile.set(this.mobileQuery.matches);
      };
      this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    });
  }

  ngOnDestroy(): void {
    if (!this.mobileQuery || !this.mobileQueryListener) return;
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
