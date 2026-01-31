import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-documents-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 2.25A2.25 2.25 0 0 1 6.25 0H10v4.25c0 .966.784 1.75 1.75 1.75H15v4.75A2.25 2.25 0 0 1 12.75 13h-6.5A2.25 2.25 0 0 1 4 10.75v-8.5Z"/>
  <path d="M1 4.5A1.5 1.5 0 0 1 2.5 3v8.125A3.375 3.375 0 0 0 5.875 14.5H12.5A1.5 1.5 0 0 1 11 16H3.25A2.25 2.25 0 0 1 1 13.75V4.5Zm10.875 0a.375.375 0 0 1-.375-.375V.5l3 4h-2.625Z"/>
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
