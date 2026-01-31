import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-columns-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2.75 1A1.75 1.75 0 0 0 1 2.75v10.5c0 .967.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 7 13.25V2.75A1.75 1.75 0 0 0 5.25 1h-2.5Zm8 0A1.75 1.75 0 0 0 9 2.75v10.5c0 .967.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 13.25V2.75A1.75 1.75 0 0 0 13.25 1h-2.5Z"/>
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
export class ColumnsIconComponent {}
