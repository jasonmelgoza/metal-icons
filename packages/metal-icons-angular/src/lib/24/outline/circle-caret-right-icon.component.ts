import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-right-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2.5 12a9.5 9.5 0 1 0 19 0 9.5 9.5 0 0 0-19 0ZM1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Z" clip-rule="evenodd"/>
  <path d="M15.709 12.574c.388-.258.388-.888 0-1.146L10.9 8.095c-.397-.265-.901.056-.901.573v6.664c0 .517.504.838.901.573l4.808-3.33Z"/>
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
export class CircleCaretRightIconComponent {}
