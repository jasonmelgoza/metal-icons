import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-headphones-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2.5c-1.468 0-2.87.56-3.9 1.548A5.13 5.13 0 0 0 2.5 7.75V8h1.25A2.25 2.25 0 0 1 6 10.25v2.5A2.25 2.25 0 0 1 3.75 15h-.5A2.25 2.25 0 0 1 1 12.75v-5c0-1.8.745-3.52 2.061-4.784A7.135 7.135 0 0 1 8 1c1.847 0 3.624.704 4.939 1.966A6.63 6.63 0 0 1 15 7.75v5A2.25 2.25 0 0 1 12.75 15h-.5A2.25 2.25 0 0 1 10 12.75v-2.5A2.25 2.25 0 0 1 12.25 8h1.25v-.25a5.13 5.13 0 0 0-1.6-3.702A5.635 5.635 0 0 0 8 2.5Zm5.5 7h-1.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V9.5Zm-11 0h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V9.5Z" clip-rule="evenodd"/>
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
export class HeadphonesIconComponent {}
