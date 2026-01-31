import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-document-plus-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 3.75A2.75 2.75 0 0 1 5.75 1H13v7.25c0 .414.336.75.75.75H21v11.25A2.75 2.75 0 0 1 18.25 23H5.75A2.75 2.75 0 0 1 3 20.25V3.75Zm9.53 7.97a.75.75 0 0 0-1.28.53v2.5h-2.5a.75.75 0 1 0 0 1.5h2.5v2.5a.75.75 0 1 0 1.5 0v-2.5h2.5a.75.75 0 1 0 0-1.5h-2.5v-2.5a.75.75 0 0 0-.22-.53Z" clip-rule="evenodd"/>
  <path d="M14.5 7.5v-6l.013.013 5.974 5.974.013.013h-6Z"/>
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
