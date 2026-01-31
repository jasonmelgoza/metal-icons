import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-document-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.25 0A2.25 2.25 0 0 0 1 2.25v11.5A2.25 2.25 0 0 0 3.25 16h9.5A2.25 2.25 0 0 0 15 13.75V5.457c0-.331-.132-.65-.366-.884L10.427.366A1.25 1.25 0 0 0 9.543 0H3.25ZM2.5 2.25a.75.75 0 0 1 .75-.75H9v3.75c0 .414.336.75.75.75h3.75v7.75a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75V2.25Zm9.94 2.25L10.5 2.56V4.5h1.94Z" clip-rule="evenodd"/>
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
export class DocumentIconComponent {}
