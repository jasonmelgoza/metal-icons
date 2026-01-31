import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-align-right-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" >
  <path fill="#000" d="M1 8a.75.75 0 0 1 .75-.75h7.614L6.235 4.295a.75.75 0 0 1 1.03-1.09l4.5 4.25a.747.747 0 0 1 .235.533v.024a.747.747 0 0 1-.211.51l-.005.004a.898.898 0 0 1-.02.02l-4.499 4.25a.751.751 0 0 1-1.03-1.091L9.364 8.75H1.75A.75.75 0 0 1 1 8Zm12.5 5.25a.75.75 0 1 0 1.5 0V2.75a.75.75 0 1 0-1.5 0v10.5Z"/>
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
