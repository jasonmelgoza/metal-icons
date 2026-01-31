import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-thumbs-up-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M9.973 1.651 6 10v13h12.48a2.75 2.75 0 0 0 2.72-2.337l1.443-9.5A2.75 2.75 0 0 0 19.923 8H14.75a.25.25 0 0 1-.25-.25V4.525A3.526 3.526 0 0 0 10.975 1a1.097 1.097 0 0 0-1.002.651ZM4.5 23V10h-.75A2.75 2.75 0 0 0 1 12.75v7.5A2.75 2.75 0 0 0 3.75 23h.75Z"/>
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
export class ThumbsUpIconComponent {}
