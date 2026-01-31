import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-smartphone-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6.75 1A2.75 2.75 0 0 0 4 3.75v16.5A2.75 2.75 0 0 0 6.75 23h10.5A2.75 2.75 0 0 0 20 20.25V3.75A2.75 2.75 0 0 0 17.25 1H6.75ZM12 18a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H12Z" clip-rule="evenodd"/>
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
export class SmartphoneIconComponent {}
