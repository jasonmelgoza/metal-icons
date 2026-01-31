import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-minus-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M8.25 11.25a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5h-7.5Z"/>
  <path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" clip-rule="evenodd"/>
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
