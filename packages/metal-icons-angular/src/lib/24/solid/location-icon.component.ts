import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-location-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M21.78 2.22a.75.75 0 0 1 .148.851l-8.763 18.5a.75.75 0 0 1-1.406-.14L9.921 14.08l-7.353-1.838a.75.75 0 0 1-.14-1.406l18.5-8.763a.75.75 0 0 1 .852.147Z" clip-rule="evenodd"/>
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
