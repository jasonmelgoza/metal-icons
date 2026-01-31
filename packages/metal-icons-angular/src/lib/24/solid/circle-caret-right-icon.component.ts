import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-right-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm3.709-10.426c.388-.258.388-.888 0-1.146L10.9 8.095c-.397-.265-.901.056-.901.573v6.664c0 .517.504.838.901.573l4.808-3.33Z" clip-rule="evenodd"/>
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
