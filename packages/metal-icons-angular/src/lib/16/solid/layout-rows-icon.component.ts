import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-layout-rows-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M16 3.25A2.25 2.25 0 0 0 13.75 1H2.25A2.25 2.25 0 0 0 0 3.25V4.5h16V3.25ZM16 6H0v4h16V6Zm0 5.5H0v1.25A2.25 2.25 0 0 0 2.25 15h11.5A2.25 2.25 0 0 0 16 12.75V11.5Z"/>
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
export class LayoutRowsIconComponent {}
