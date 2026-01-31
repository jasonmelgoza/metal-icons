import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-documents-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.5 3.75A2.75 2.75 0 0 1 10.25 1h3.25v6.25c0 .967.784 1.75 1.75 1.75H21v5.75a2.75 2.75 0 0 1-2.75 2.75h-8a2.75 2.75 0 0 1-2.75-2.75v-11Z"/>
  <path d="m15 1.5 5.5 6h-5.125A.375.375 0 0 1 15 7.125V1.5ZM3 9.25A2.75 2.75 0 0 1 5.75 6.5H6v9.125A3.375 3.375 0 0 0 9.375 19H16.5v1.25A2.75 2.75 0 0 1 13.75 23h-8A2.75 2.75 0 0 1 3 20.25v-11Z"/>
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
export class DocumentsIconComponent {}
