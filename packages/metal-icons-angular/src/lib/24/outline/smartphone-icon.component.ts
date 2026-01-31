import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-smartphone-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.293 18.293A1 1 0 0 1 12 18h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-.707-1.707Z"/>
  <path fill-rule="evenodd" d="M4.805 1.805A2.75 2.75 0 0 1 6.75 1h10.5A2.75 2.75 0 0 1 20 3.75v16.5A2.75 2.75 0 0 1 17.25 23H6.75A2.75 2.75 0 0 1 4 20.25V3.75c0-.73.29-1.429.805-1.945ZM6.75 2.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H6.75Z" clip-rule="evenodd"/>
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
