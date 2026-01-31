import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-right-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M8.235 4.045a.75.75 0 1 1 1.03-1.09l4.5 4.25a.751.751 0 0 1 0 1.09l-4.5 4.25a.75.75 0 0 1-1.03-1.09L11.364 8.5H2.75a.75.75 0 0 1 0-1.5h8.614L8.235 4.045Z"/>
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
export class ArrowRightIconComponent {}
