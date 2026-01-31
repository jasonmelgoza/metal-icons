import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-corner-down-right-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2.5 2.75a.75.75 0 0 1 1.5 0v4.5A1.75 1.75 0 0 0 5.75 9h5.69L9.22 6.78a.75.75 0 0 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H5.75A3.25 3.25 0 0 1 2.5 7.25v-4.5Z"/>
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
export class CornerDownRightIconComponent {}
