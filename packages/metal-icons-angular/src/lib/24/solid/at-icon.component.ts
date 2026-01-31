import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-at-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" fill-rule="evenodd" d="M14.5 1.288a11 11 0 1 0 4.188 19.445.75.75 0 1 0-.912-1.19 9.5 9.5 0 1 1 3.724-7.544v1.025c0 1.258-.995 2.476-2.325 2.476-1.288 0-2.175-1.142-2.175-2.476V7.75a.75.75 0 0 0-1.5 0v.68a5 5 0 1 0 .488 6.587c.58 1.12 1.666 1.983 3.187 1.983C21.495 17 23 14.94 23 13.024V12a11 11 0 0 0-8.5-10.711v-.001ZM15.5 12a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z" clip-rule="evenodd"/>
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
export class AtIconComponent {}
