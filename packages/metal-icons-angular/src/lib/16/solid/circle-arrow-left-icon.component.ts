import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-arrow-left-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.343 2.343a8 8 0 1 0 11.314 11.314A8 8 0 0 0 2.343 2.343ZM7.93 4.93a.75.75 0 0 0-1.234-.184L4.197 7.494A.744.744 0 0 0 4 7.999v.004c0 .186.07.365.196.502l2.499 2.75a.75.75 0 1 0 1.11-1.01L6.445 8.75h4.805a.75.75 0 1 0 0-1.5H6.445l1.36-1.495a.75.75 0 0 0 .124-.825Z" clip-rule="evenodd"/>
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
export class CircleArrowLeftIconComponent {}
