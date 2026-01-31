import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-pencil-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="m13.295 6.455-8.428 8.429a.751.751 0 0 1-.349.197l-3.586.896a.75.75 0 0 1-.91-.909l.897-3.587a.751.751 0 0 1 .197-.348l8.428-8.429 3.75 3.751ZM13.303 0c.674 0 1.32.268 1.797.745l.155.154a2.543 2.543 0 0 1 0 3.596l-.9.9-3.75-3.751.9-.899A2.544 2.544 0 0 1 13.303 0Z"/>
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
export class PencilIconComponent {}
