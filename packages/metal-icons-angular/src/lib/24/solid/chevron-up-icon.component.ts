import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevron-up-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5.23 15.79a.75.75 0 0 0 1.06-.02L12 9.832l5.71 5.938a.75.75 0 1 0 1.08-1.04l-6.25-6.5a.749.749 0 0 0-1.08 0l-6.25 6.5a.75.75 0 0 0 .02 1.06Z" clip-rule="evenodd"/>
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
export class ChevronUpIconComponent {}
