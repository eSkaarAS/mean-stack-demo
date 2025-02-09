import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'optimize-image-component',
    styles: [
        `
      .image-test {
        position: relative;
        background-color: blue;
        padding: 10px;
        border-radius: 5px;
      }
    `,
    ],
    template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img
          ngSrc="/assets/logo.svg"
          alt="Angular logo"
          width="32"
          height="32"
        />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
      <li class="image-test">
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" fill />
      </li>
    </ul>
  `,
    imports: [NgOptimizedImage]
})
export class OptimizeImageComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}

/**
 *
 * providers: [
 * provideImgixLoader('https://my.base.url/'),
 * ]
 */
