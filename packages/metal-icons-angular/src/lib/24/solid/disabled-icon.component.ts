import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-disabled-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4.172 19.728c.03.036.064.07.1.1A10.965 10.965 0 0 0 12 23c6.075 0 11-4.925 11-11 0-3.012-1.21-5.742-3.172-7.728a.772.772 0 0 0-.1-.1A10.965 10.965 0 0 0 12 1C5.925 1 1 5.925 1 12c0 3.012 1.21 5.742 3.172 7.728ZM2.5 12a9.5 9.5 0 0 1 15.666-7.227L4.773 18.166A9.462 9.462 0 0 1 2.5 12Zm16.727-6.166A9.5 9.5 0 0 1 12 21.5a9.462 9.462 0 0 1-6.166-2.273L19.227 5.834Z" clip-rule="evenodd"/>
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
export class DisabledIconComponent {}
