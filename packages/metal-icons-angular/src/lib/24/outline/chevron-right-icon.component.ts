import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevron-right-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.21 18.77a.75.75 0 0 1 .02-1.06L14.168 12 8.23 6.29a.75.75 0 1 1 1.04-1.08l6.5 6.25a.751.751 0 0 1 0 1.08l-6.5 6.25a.75.75 0 0 1-1.06-.02Z" clip-rule="evenodd"/>
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
export class ChevronRightIconComponent {}
