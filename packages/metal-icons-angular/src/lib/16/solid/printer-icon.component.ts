import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-printer-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.25 5H3V3.25A2.25 2.25 0 0 1 5.25 1h5.5A2.25 2.25 0 0 1 13 3.25V5h.75A2.25 2.25 0 0 1 16 7.25v3.5A2.25 2.25 0 0 1 13.75 13H12.5v.75c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25V13H2.25A2.25 2.25 0 0 1 0 10.75v-3.5A2.25 2.25 0 0 1 2.25 5Zm3-2.5a.75.75 0 0 0-.75.75V5h7V3.25a.75.75 0 0 0-.75-.75h-5.5Zm5.75 11H5V10h6v3.5Z" clip-rule="evenodd"/>
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
export class PrinterIconComponent {}
