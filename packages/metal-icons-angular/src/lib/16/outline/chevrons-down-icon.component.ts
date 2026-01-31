import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevrons-down-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.3 3.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02L8 6.148 5.3 3.24Z"/>
  <path d="M5.3 8.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.752.752 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02L8 11.148 5.3 8.24Z"/>
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
export class ChevronsDownIconComponent {}
