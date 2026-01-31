import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-left-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M11.771 5.04a.75.75 0 1 0-1.042-1.08l-7.5 7.25a.75.75 0 0 0 0 1.08l7.5 7.25a.751.751 0 0 0 1.042-1.08L5.605 12.5H20.25a.75.75 0 1 0 0-1.5H5.605l6.166-5.96Z"/>
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
export class ArrowLeftIconComponent {}
