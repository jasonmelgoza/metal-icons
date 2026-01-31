import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-down-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M12.5 3.75a.75.75 0 1 0-1.5 0v14.645l-5.96-6.166a.75.75 0 1 0-1.08 1.042l7.25 7.5a.752.752 0 0 0 1.08 0l7.25-7.5a.751.751 0 0 0-1.08-1.042l-5.96 6.166V3.75Z"/>
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
export class ArrowDownIconComponent {}
