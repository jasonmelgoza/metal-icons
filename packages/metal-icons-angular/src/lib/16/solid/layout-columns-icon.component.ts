import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-layout-columns-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13.75 15A2.25 2.25 0 0 0 16 12.75v-9.5A2.25 2.25 0 0 0 13.75 1H11.5v14h2.25ZM10 15V1H6v14h4Zm-5.5 0V1H2.25A2.25 2.25 0 0 0 0 3.25v9.5A2.25 2.25 0 0 0 2.25 15H4.5Z"/>
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
export class LayoutColumnsIconComponent {}
