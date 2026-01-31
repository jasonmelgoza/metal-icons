import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-align-right-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" >
  <path fill="#000" d="M2 12a.75.75 0 0 1 .75-.75h12.638L10.23 6.29a.75.75 0 1 1 1.04-1.08l6.5 6.25a.751.751 0 0 1 0 1.08l-6.5 6.25a.75.75 0 1 1-1.04-1.08l5.158-4.96H2.75A.75.75 0 0 1 2 12Zm18.5 8.25a.75.75 0 1 0 1.5 0V3.75a.75.75 0 1 0-1.5 0v16.5Z"/>
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
export class AlignRightIconComponent {}
