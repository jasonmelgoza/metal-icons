import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-align-top-24-solid',
  standalone: true,
  template: `
    <svg  xmlns="http://www.w3.org/2000/svg">
  <path d="M11.75 22a.75.75 0 0 1-.75-.75V8.612L6.04 13.77a.75.75 0 1 1-1.08-1.04l6.25-6.5a.75.75 0 0 1 1.08 0l6.25 6.5a.75.75 0 1 1-1.08 1.04L12.5 8.612V21.25a.75.75 0 0 1-.75.75ZM20 3.5A.75.75 0 1 0 20 2H3.5a.75.75 0 0 0 0 1.5H20Z" fill="#000"/>
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
export class AlignTopIconComponent {}
