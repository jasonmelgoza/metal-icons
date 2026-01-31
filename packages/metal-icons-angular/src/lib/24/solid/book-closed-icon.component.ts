import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-book-closed-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" fill-rule="evenodd" d="M5.75 1A2.75 2.75 0 0 0 3 3.75v16.5A2.75 2.75 0 0 0 5.75 23h13.5A1.75 1.75 0 0 0 21 21.25V2.75A1.75 1.75 0 0 0 19.25 1H5.75ZM4.5 20.25c0-.69.56-1.25 1.25-1.25H19.5v2.25a.25.25 0 0 1-.25.25H5.75c-.69 0-1.25-.56-1.25-1.25Z" clip-rule="evenodd"/>
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
export class BookClosedIconComponent {}
