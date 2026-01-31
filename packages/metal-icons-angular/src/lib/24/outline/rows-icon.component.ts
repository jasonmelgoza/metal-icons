import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-rows-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M20.5 3.75v5.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 1 .25-.25h16.5a.25.25 0 0 1 .25.25ZM20.25 2c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 11H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2h16.5Zm.25 12.75v5.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 1 .25-.25h16.5a.25.25 0 0 1 .25.25ZM20.25 13c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75h16.5Z" clip-rule="evenodd"/>
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
export class RowsIconComponent {}
