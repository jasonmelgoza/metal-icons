import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-down-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm2.908 6.39a.75.75 0 0 1-.027.766l-2.25 3.5a.75.75 0 0 1-1.262 0l-2.25-3.5A.75.75 0 0 1 5.75 6h4.5a.75.75 0 0 1 .658.39Z" clip-rule="evenodd"/>
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
export class CircleCaretDownIconComponent {}
