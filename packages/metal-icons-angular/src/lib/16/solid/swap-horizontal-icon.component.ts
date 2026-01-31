import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-swap-horizontal-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.55 1.26A.75.75 0 1 0 3.45.24L.2 3.74a.75.75 0 0 0 0 1.02l3.25 3.5a.75.75 0 0 0 1.1-1.02L2.47 5h12.78a.75.75 0 0 0 0-1.5H2.47l2.08-2.24Zm6.9 7.5a.75.75 0 0 1 1.1-1.02l3.25 3.5a.75.75 0 0 1 0 1.02l-3.25 3.5a.75.75 0 1 1-1.1-1.02l2.08-2.24H.75a.75.75 0 0 1 0-1.5h12.78l-2.08-2.24Z" clip-rule="evenodd"/>
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
