import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-clipboard-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.975 1h.775A2.25 2.25 0 0 1 15 3.25v10.5A2.25 2.25 0 0 1 12.75 16h-9.5A2.25 2.25 0 0 1 1 13.75V3.25A2.25 2.25 0 0 1 3.25 1h.775c.116-.57.62-1 1.225-1h5.5c.605 0 1.11.43 1.225 1ZM4 2.5h-.75a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V3.25a.75.75 0 0 0-.75-.75H12v.75c0 .69-.56 1.25-1.25 1.25h-5.5C4.56 4.5 4 3.94 4 3.25V2.5Zm1.5.5V1.5h5V3h-5Z" clip-rule="evenodd"/>
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
