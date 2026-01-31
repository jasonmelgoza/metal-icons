import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-align-bottom-24-solid',
  standalone: true,
  template: `
    <svg  xmlns="http://www.w3.org/2000/svg">
  <path d="M11.75 2a.75.75 0 0 1 .75.75v12.638l4.96-5.158a.75.75 0 1 1 1.08 1.04l-6.25 6.5a.751.751 0 0 1-1.08 0l-6.25-6.5a.75.75 0 1 1 1.08-1.04L11 15.388V2.75a.75.75 0 0 1 .75-.75ZM3.5 20.5a.75.75 0 1 0 0 1.5H20a.75.75 0 1 0 0-1.5H3.5Z" fill="#000"/>
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
export class AlignBottomIconComponent {}
