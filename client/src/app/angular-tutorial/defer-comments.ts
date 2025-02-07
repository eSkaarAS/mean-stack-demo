import { Component } from '@angular/core';

@Component({
  selector: 'defer-comments',
  standalone: true,
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
})
export class DeferCommentsComponent {}
