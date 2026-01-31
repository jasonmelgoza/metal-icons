import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-arrow-down-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.343 2.343a8 8 0 1 0 11.314 11.314A8 8 0 0 0 2.343 2.343ZM5.215 8a.75.75 0 0 1 .54.195l1.495 1.36V4.75a.75.75 0 0 1 1.5 0v4.805l1.495-1.36a.75.75 0 0 1 1.01 1.11l-2.75 2.5a.748.748 0 0 1-1.01 0l-2.75-2.5A.75.75 0 0 1 5.215 8Z" clip-rule="evenodd"/>
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
export class CircleArrowDownIconComponent {}
