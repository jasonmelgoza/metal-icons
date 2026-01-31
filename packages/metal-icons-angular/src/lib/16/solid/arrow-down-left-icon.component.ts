import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-down-left-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M12.78 4.28a.75.75 0 0 0-1.06-1.06L4.5 10.44V6.75a.75.75 0 1 0-1.5 0v5.5a.748.748 0 0 0 .75.75h5.5a.75.75 0 1 0 0-1.5H5.56l7.22-7.22Z"/>
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
export class ArrowDownLeftIconComponent {}
