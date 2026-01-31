import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-up-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M5.04 10.771A.75.75 0 0 1 3.96 9.73l7.25-7.5a.751.751 0 0 1 1.08 0l7.25 7.5a.751.751 0 0 1-1.08 1.042L12.5 4.605V20.25a.75.75 0 1 1-1.5 0V4.605l-5.96 6.166Z"/>
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
export class ArrowUpIconComponent {}
