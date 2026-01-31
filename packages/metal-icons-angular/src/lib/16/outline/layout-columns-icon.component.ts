import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-layout-columns-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.75 15A2.25 2.25 0 0 0 16 12.75v-9.5A2.25 2.25 0 0 0 13.75 1H2.25A2.25 2.25 0 0 0 0 3.25v9.5A2.25 2.25 0 0 0 2.25 15h11.5Zm-11.5-1.5H4.5v-11H2.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75ZM10 2.5H6v11h4v-11Zm1.5 11h2.25a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75H11.5v11Z" clip-rule="evenodd"/>
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
