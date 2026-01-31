import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-document-plus-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.25 0H9v5.25c0 .414.336.75.75.75H15v7.75A2.25 2.25 0 0 1 12.75 16h-9.5A2.25 2.25 0 0 1 1 13.75V2.25A2.25 2.25 0 0 1 3.25 0Zm5.28 8.22a.75.75 0 0 0-1.28.53V10H6a.75.75 0 1 0 0 1.5h1.25v1.25a.75.75 0 1 0 1.5 0V11.5H10a.75.75 0 1 0 0-1.5H8.75V8.75a.75.75 0 0 0-.22-.53Z" clip-rule="evenodd"/>
  <path d="M10.5 4.5h4l-4-4v4Z"/>
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
export class DocumentPlusIconComponent {}
