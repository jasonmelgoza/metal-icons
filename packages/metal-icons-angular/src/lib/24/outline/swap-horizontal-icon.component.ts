import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-swap-horizontal-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6.72 3.309a.75.75 0 0 0-1-1.118l-4.47 4a.75.75 0 0 0 0 1.118l4.47 4a.75.75 0 0 0 1-1.118L3.713 7.5H22.25a.75.75 0 0 0 0-1.5H3.713L6.72 3.309Zm10.56 10.5a.75.75 0 1 1 1-1.118l4.47 4a.75.75 0 0 1 0 1.118l-4.47 4a.75.75 0 1 1-1-1.118L20.287 18H1.75a.75.75 0 0 1 0-1.5h18.537l-3.007-2.691Z" clip-rule="evenodd"/>
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
export class SwapHorizontalIconComponent {}
