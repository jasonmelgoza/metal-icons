import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-layout-columns-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M20.25 22A2.75 2.75 0 0 0 23 19.25V4.75A2.75 2.75 0 0 0 20.25 2H17v20h3.25Zm-4.75 0V2h-7v20h7ZM3.25 2H7v20H3.25A2.25 2.25 0 0 1 1 19.75V4.25A2.25 2.25 0 0 1 3.25 2Z"/>
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
