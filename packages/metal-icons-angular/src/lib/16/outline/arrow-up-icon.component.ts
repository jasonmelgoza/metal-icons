import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-up-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M4.045 7.765a.75.75 0 1 1-1.09-1.03l4.25-4.5a.75.75 0 0 1 1.09 0l4.25 4.5a.75.75 0 0 1-1.09 1.03L8.5 4.636v8.614a.75.75 0 1 1-1.5 0V4.636L4.045 7.765Z"/>
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
