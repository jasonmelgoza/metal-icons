import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-document-minus-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M15.25 14a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5h6.5Z"/>
  <path fill-rule="evenodd" d="M5.75 1A2.75 2.75 0 0 0 3 3.75v16.5A2.75 2.75 0 0 0 5.75 23h12.5A2.75 2.75 0 0 0 21 20.25V8.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 13.336 1H5.75ZM4.5 3.75c0-.69.56-1.25 1.25-1.25H13v5.75c0 .414.336.75.75.75h5.75v11.25c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V3.75ZM18.44 7.5 14.5 3.56V7.5h3.94Z" clip-rule="evenodd"/>
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
export class DocumentMinusIconComponent {}
