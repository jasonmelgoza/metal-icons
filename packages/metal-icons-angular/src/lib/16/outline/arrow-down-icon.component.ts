import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-down-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M8.5 2.75a.75.75 0 1 0-1.5 0v8.614L4.045 8.235a.75.75 0 0 0-1.09 1.03l4.248 4.498a.747.747 0 0 0 .535.236L7.75 14h.012a.747.747 0 0 0 .533-.235l4.25-4.5a.75.75 0 0 0-1.09-1.03L8.5 11.364V2.75Z"/>
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
export class ArrowDownIconComponent {}
