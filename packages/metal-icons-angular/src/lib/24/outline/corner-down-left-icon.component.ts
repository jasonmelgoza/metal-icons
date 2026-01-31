import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-corner-down-left-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M21.5 3.75a.75.75 0 1 0-1.5 0v7c0 .847-.357 1.669-1.009 2.282A3.64 3.64 0 0 1 16.5 14H5.622l4.146-3.957a.75.75 0 0 0-1.036-1.086l-5.498 5.25a.747.747 0 0 0-.002 1.085l5.5 5.25a.749.749 0 1 0 1.036-1.085L5.622 15.5H16.5c1.312 0 2.578-.49 3.52-1.375a4.633 4.633 0 0 0 1.48-3.375v-7Z"/>
</svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `]
})
export class CornerDownLeftIconComponent {}
