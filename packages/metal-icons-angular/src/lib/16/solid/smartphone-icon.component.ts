import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-smartphone-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.25 0A2.25 2.25 0 0 0 2 2.25v11.5A2.25 2.25 0 0 0 4.25 16h7.5A2.25 2.25 0 0 0 14 13.75V2.25A2.25 2.25 0 0 0 11.75 0h-7.5ZM8 11a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2H8Z" clip-rule="evenodd"/>
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
