import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-plus-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13 5a.75.75 0 1 0-1.5 0v6.5H5A.75.75 0 1 0 5 13h6.5v6.5a.75.75 0 1 0 1.5 0V13h6.5a.75.75 0 1 0 0-1.5H13V5Z"/>
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
export class PlusIconComponent {}
