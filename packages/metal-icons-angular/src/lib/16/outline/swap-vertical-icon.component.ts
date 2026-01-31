import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-swap-vertical-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.74 4.55a.75.75 0 1 0 1.02-1.1L12.26.2a.75.75 0 0 0-1.02 0l-3.5 3.25a.75.75 0 1 0 1.02 1.1L11 2.47v12.78a.75.75 0 0 0 1.5 0V2.47l2.24 2.08Zm-7.5 6.9a.75.75 0 0 1 1.02 1.1l-3.5 3.25a.75.75 0 0 1-1.02 0l-3.5-3.25a.75.75 0 1 1 1.02-1.1l2.24 2.08V.75a.75.75 0 0 1 1.5 0v12.78l2.24-2.08Z" clip-rule="evenodd"/>
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
