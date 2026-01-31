import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-location-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.78 1.22a.75.75 0 0 1 .148.851l-5.921 12.5a.75.75 0 0 1-1.406-.14L6.395 9.606 1.568 8.4a.75.75 0 0 1-.14-1.406l12.5-5.92a.75.75 0 0 1 .852.146Z" clip-rule="evenodd"/>
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
export class LocationIconComponent {}
