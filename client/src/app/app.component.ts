import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DemoSidebar } from './layout/sidebar/sidebar.component';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    DemoSidebar,
    MainLayoutComponent,
    TestComponent,
  ],
  template: `
    <demo-sidebar>
      <app-main-layout>
        <router-outlet></router-outlet>
        <app-test />
      </app-main-layout>
    </demo-sidebar>
  `,
})
export class AppComponent {
  title = 'client';
  items = new Array();

  testService = new TestService();

  addItem(item: string) {
    this.items.push(item);
  }

  addItemTest(item: string) {
    console.log(item);
  }

  testFunction() {
    console.log('test');
    const test = this.testService.test();
  }
}
