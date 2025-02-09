import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './angular-tutorial/input-component';
import { OptimizeImageComponent } from './angular-tutorial/optimize-image-component';
import { OutputComponent } from './angular-tutorial/output-component';
import { RedirectRouteComponent } from './angular-tutorial/redirect-route-component';
import { ShareHoldersTableComponent } from './examples/shareHoldersTable.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    InputComponent,
    OutputComponent,
    OptimizeImageComponent,
    RedirectRouteComponent,
    ShareHoldersTableComponent,
  ],
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
    <mat-toolbar>
      <span>Employees Management System</span>
    </mat-toolbar>
    <main>
      <div class="flexDiv">
        <router-outlet></router-outlet>
        <app-shareHolder-table></app-shareHolder-table>
        <input-component name="Alice" />
        <output-component (addItemEvent)="addItem($event)" />
        <output-component (addItemEvent)="addItemTest($event)" />
        <p>all the way down {{ items.length }}</p>
        <!-- <defer-component /> -->
        <optimize-image-component />
        <redirect-route-component />
      </div>
    </main>
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
