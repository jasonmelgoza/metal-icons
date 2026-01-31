import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-pencil-line-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="M10.75 21.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-10.5ZM19.501 9.361 7.351 21.513a.75.75 0 0 1-.348.197l-5.071 1.267a.75.75 0 0 1-.91-.909l1.268-5.07a.75.75 0 0 1 .197-.349l12.15-12.151 4.864 4.863ZM19.497 1c.871 0 1.706.346 2.323.962l.218.218a3.287 3.287 0 0 1 0 4.645l-1.476 1.476-4.864-4.864 1.477-1.475A3.285 3.285 0 0 1 19.497 1Z"/>
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
export class PencilLineIconComponent {}
