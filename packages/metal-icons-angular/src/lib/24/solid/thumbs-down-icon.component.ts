import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-thumbs-down-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 23 22">
  <path d="M13.456 21.349 17.429 13V0H4.949a2.75 2.75 0 0 0-2.72 2.337l-1.443 9.5A2.75 2.75 0 0 0 3.506 15h5.173a.25.25 0 0 1 .25.25v3.225A3.525 3.525 0 0 0 12.454 22a1.097 1.097 0 0 0 1.002-.651ZM18.929 0v13h.75a2.75 2.75 0 0 0 2.75-2.75v-7.5A2.75 2.75 0 0 0 19.679 0h-.75Z"/>
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
export class ThumbsDownIconComponent {}
