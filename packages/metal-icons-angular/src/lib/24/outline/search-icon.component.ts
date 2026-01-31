import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-search-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M10.5 2a8.5 8.5 0 1 0 5.457 15.017l4.763 4.763a.751.751 0 1 0 1.06-1.06l-4.763-4.763A8.5 8.5 0 0 0 10.5 2Zm-7 8.5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z" clip-rule="evenodd"/>
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
export class SearchIconComponent {}
