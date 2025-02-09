import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { DemoSidebar } from './layout/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, DemoSidebar],
  styles: [
    `
      main {
        display: flex;
        justify-content: center;
        padding: 2rem 4rem;
      }
      .flexDiv {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #f5f5f5;
        gap: 1rem;
      }
    `,
  ],
  template: `
    <demo-sidebar>
      <router-outlet></router-outlet>
    </demo-sidebar>
  `,
})
export class AppComponent {
  title = 'client';
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  addItemTest(item: string) {
    console.log(item);
  }
}
