import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-swap-vertical-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M20.691 6.72a.75.75 0 1 0 1.118-1l-4-4.47a.75.75 0 0 0-1.118 0l-4 4.47a.75.75 0 0 0 1.118 1L16.5 3.713V22.25a.75.75 0 0 0 1.5 0V3.713l2.691 3.007Zm-10.5 10.56a.75.75 0 1 1 1.118 1l-4 4.47a.75.75 0 0 1-1.118 0l-4-4.47a.75.75 0 1 1 1.118-1L6 20.287V1.75a.75.75 0 0 1 1.5 0v18.537l2.691-3.007Z" clip-rule="evenodd" opacity=".9"/>
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
export class SwapVerticalIconComponent {}
