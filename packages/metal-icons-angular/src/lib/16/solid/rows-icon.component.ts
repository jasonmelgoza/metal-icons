import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-rows-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 2.75A1.75 1.75 0 0 0 13.25 1H2.75A1.75 1.75 0 0 0 1 2.75v2.5C1 6.216 1.784 7 2.75 7h10.5A1.75 1.75 0 0 0 15 5.25v-2.5Zm0 8A1.75 1.75 0 0 0 13.25 9H2.75A1.75 1.75 0 0 0 1 10.75v2.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 15 13.25v-2.5Z"/>
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
