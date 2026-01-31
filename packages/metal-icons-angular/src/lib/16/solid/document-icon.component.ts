import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-document-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 0H3.25A2.25 2.25 0 0 0 1 2.25v11.5A2.25 2.25 0 0 0 3.25 16h9.5A2.25 2.25 0 0 0 15 13.75V6H9.75A.75.75 0 0 1 9 5.25V0Z"/>
  <path d="M14.5 4.5h-4v-4l4 4Z"/>
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
