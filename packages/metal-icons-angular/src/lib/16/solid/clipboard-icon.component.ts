import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-clipboard-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.975 1h.775A2.25 2.25 0 0 1 15 3.25v10.5A2.25 2.25 0 0 1 12.75 16h-9.5A2.25 2.25 0 0 1 1 13.75V3.25A2.25 2.25 0 0 1 3.25 1h.775c.116-.57.62-1 1.225-1h5.5c.605 0 1.11.43 1.225 1ZM5.5 3V1.5h5V3h-5Z" clip-rule="evenodd"/>
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
