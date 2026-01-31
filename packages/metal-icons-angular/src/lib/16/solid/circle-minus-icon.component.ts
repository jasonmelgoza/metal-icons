import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-minus-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.343 2.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 2.343 2.343ZM4.22 7.47a.75.75 0 0 1 .53-.22h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 0 1-.53-1.28Z" clip-rule="evenodd"/>
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
export class CircleMinusIconComponent {}
