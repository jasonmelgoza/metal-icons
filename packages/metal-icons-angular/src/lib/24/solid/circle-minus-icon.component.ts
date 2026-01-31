import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-minus-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm6.72-.53a.75.75 0 0 1 .53-.22h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.53-1.28Z" clip-rule="evenodd"/>
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
