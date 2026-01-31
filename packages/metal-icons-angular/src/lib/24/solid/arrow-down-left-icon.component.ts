import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-down-left-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M18.78 6.28a.75.75 0 0 0-1.06-1.06L6.5 16.44V8.75a.75.75 0 0 0-1.5 0v9.5c0 .198.078.389.218.529l.002.001.001.002c.14.14.33.218.529.218h9.5a.75.75 0 1 0 0-1.5H7.56L18.78 6.28Z"/>
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
