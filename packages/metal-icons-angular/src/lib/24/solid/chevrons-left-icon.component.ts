import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevrons-left-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.768 16.707a.75.75 0 1 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 1 1 1.036 1.086L6.836 12l4.932 4.707Z"/>
  <path d="M18.768 16.707a.75.75 0 1 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 1 1 1.036 1.086L13.836 12l4.932 4.707Z"/>
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
export class ChevronsLeftIconComponent {}
