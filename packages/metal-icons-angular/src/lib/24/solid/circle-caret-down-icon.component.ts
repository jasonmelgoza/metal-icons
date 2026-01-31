import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-down-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm10.426 3.709c.258.388.888.388 1.146 0l3.333-4.808c.265-.397-.056-.901-.573-.901H8.668c-.517 0-.838.504-.573.901l3.33 4.808Z" clip-rule="evenodd"/>
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
