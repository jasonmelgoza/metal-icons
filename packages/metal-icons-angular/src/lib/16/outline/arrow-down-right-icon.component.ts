import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-down-right-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M3.22 4.28a.75.75 0 0 1 1.06-1.06l7.22 7.22V6.75a.75.75 0 1 1 1.5 0v5.5a.746.746 0 0 1-.75.75h-5.5a.75.75 0 1 1 0-1.5h3.69L3.22 4.28Z"/>
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
