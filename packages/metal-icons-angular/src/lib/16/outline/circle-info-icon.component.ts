import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-info-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7.292-4.707A.995.995 0 0 1 7.997 3h.006A.995.995 0 0 1 9 4a1.002 1.002 0 0 1-.997 1h-.006A.995.995 0 0 1 7 4a1 1 0 0 1 .292-.707ZM5.5 6.75A.75.75 0 0 1 6.25 6h1.5a1 1 0 0 1 1 1v4.5h1a.75.75 0 0 1 0 1.5h-1.5a1 1 0 0 1-1-1V7.5h-1a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
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
export class CircleInfoIconComponent {}
