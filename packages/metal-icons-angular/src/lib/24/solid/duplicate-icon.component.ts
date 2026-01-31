import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-duplicate-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M3.75 1A2.75 2.75 0 0 0 1 3.75v10.5A2.75 2.75 0 0 0 3.75 17h1.5a.25.25 0 0 0 .25-.25V9a3.75 3.75 0 0 1 3.75-3.75h7.5A.25.25 0 0 0 17 5V3.75A2.75 2.75 0 0 0 14.25 1H3.75Z"/>
  <path fill-rule="evenodd" d="M9.75 7A2.75 2.75 0 0 0 7 9.75v10.5A2.75 2.75 0 0 0 9.75 23h10.5A2.75 2.75 0 0 0 23 20.25V9.75A2.75 2.75 0 0 0 20.25 7H9.75Z" clip-rule="evenodd"/>
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
export class DuplicateIconComponent {}
