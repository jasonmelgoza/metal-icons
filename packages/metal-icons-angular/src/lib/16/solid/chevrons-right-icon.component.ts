import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevrons-right-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3.24 5.3a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1L6.148 8 3.24 5.3Z"/>
  <path d="M8.24 5.3a.75.75 0 0 1 1.02-1.1l3.5 3.25a.749.749 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1L11.148 8 8.24 5.3Z"/>
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
export class ChevronsRightIconComponent {}
