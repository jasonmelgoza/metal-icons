import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-down-right-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M5.22 7.28a.75.75 0 0 1 1.06-1.06L17.5 17.44V9.75a.75.75 0 1 1 1.5 0v9.5a.746.746 0 0 1-.75.75h-9.5a.75.75 0 1 1 0-1.5h7.69L5.22 7.28Z"/>
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
export class ArrowDownRightIconComponent {}
