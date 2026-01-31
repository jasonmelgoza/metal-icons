import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevron-down-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5.23 8.21a.75.75 0 0 1 1.06.02L12 14.168l5.71-5.938a.75.75 0 1 1 1.08 1.04l-6.25 6.5a.75.75 0 0 1-1.08 0l-6.25-6.5a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd"/>
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
export class ChevronDownIconComponent {}
