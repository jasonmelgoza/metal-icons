import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-send-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="m5.786 16.388-.1 3.807a.75.75 0 0 0 1.095.686l3.203-1.655 3.046 3.03a2.484 2.484 0 0 0 2.363.673 2.515 2.515 0 0 0 1.814-1.659l5.64-16.892a2.514 2.514 0 0 0-.156-2.07L5.786 16.388ZM21.6 1.26a2.517 2.517 0 0 0-1.979-.107L2.715 6.789l-.005.002a2.516 2.516 0 0 0-1.66 1.922 2.482 2.482 0 0 0 .679 2.249l3.738 3.735L21.6 1.261Z"/>
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
export class SendIconComponent {}
