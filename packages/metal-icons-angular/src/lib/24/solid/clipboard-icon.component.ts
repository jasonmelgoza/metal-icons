import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-clipboard-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.75 1A1.75 1.75 0 0 0 7 2.75V3H5.75A2.75 2.75 0 0 0 3 5.75v14.5A2.75 2.75 0 0 0 5.75 23h12.5A2.75 2.75 0 0 0 21 20.25V5.75A2.75 2.75 0 0 0 18.25 3H17v-.25A1.75 1.75 0 0 0 15.25 1h-6.5ZM8.5 2.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25v-1.5Z" clip-rule="evenodd"/>
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
