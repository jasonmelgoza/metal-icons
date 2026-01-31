import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-rows-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.25 1c.967 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 7H2.75A1.75 1.75 0 0 1 1 5.25v-2.5C1 1.784 1.783 1 2.75 1h10.5Zm.25 1.75v2.5a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25ZM13.25 9c.967 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25v-2.5C1 9.784 1.783 9 2.75 9h10.5Zm.25 1.75v2.5a.25.25 0 0 1-.25.25H2.75a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25Z" clip-rule="evenodd"/>
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
