import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-clipboard-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.75 1A1.75 1.75 0 0 0 7 2.75V3H5.75A2.75 2.75 0 0 0 3 5.75v14.5A2.75 2.75 0 0 0 5.75 23h12.5A2.75 2.75 0 0 0 21 20.25V5.75A2.75 2.75 0 0 0 18.25 3H17v-.25A1.75 1.75 0 0 0 15.25 1h-6.5Zm8.232 3.5A1.75 1.75 0 0 1 15.25 6h-6.5a1.75 1.75 0 0 1-1.732-1.5H5.75c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-1.268ZM8.5 2.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25v-1.5Z" clip-rule="evenodd"/>
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
export class ClipboardIconComponent {}
