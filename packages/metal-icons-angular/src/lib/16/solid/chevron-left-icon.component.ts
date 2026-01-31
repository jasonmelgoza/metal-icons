import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevron-left-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.795 3.235a.75.75 0 0 1-.03 1.06L6.842 8l3.923 3.705a.75.75 0 0 1-1.03 1.09l-4.5-4.25a.75.75 0 0 1 0-1.09l4.5-4.25a.75.75 0 0 1 1.06.03Z" clip-rule="evenodd"/>
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
export class ChevronLeftIconComponent {}
