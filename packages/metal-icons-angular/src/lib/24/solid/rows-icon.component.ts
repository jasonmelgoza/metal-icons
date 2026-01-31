import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-rows-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M22 14.75A1.75 1.75 0 0 0 20.25 13H3.75A1.75 1.75 0 0 0 2 14.75v5.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 20.25v-5.5Zm0-11A1.75 1.75 0 0 0 20.25 2H3.75A1.75 1.75 0 0 0 2 3.75v5.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 9.25v-5.5Z"/>
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
