import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-corner-down-right-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M2.5 3.75a.75.75 0 0 1 1.5 0v7c0 .847.357 1.669 1.009 2.282A3.64 3.64 0 0 0 7.5 14h10.878l-4.146-3.957a.75.75 0 1 1 1.036-1.086l5.498 5.25a.75.75 0 0 1 .002 1.085l-5.5 5.25a.75.75 0 1 1-1.036-1.085l4.146-3.957H7.5a5.139 5.139 0 0 1-3.52-1.375A4.634 4.634 0 0 1 2.5 10.75v-7Z"/>
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
export class CornerDownRightIconComponent {}
