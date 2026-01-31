import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chat-bubble-square-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M22 4.75A2.75 2.75 0 0 0 19.25 2H4.75A2.75 2.75 0 0 0 2 4.75v16.5a.75.75 0 0 0 1.231.575l4.228-3.534A1.25 1.25 0 0 1 8.26 18h10.99A2.75 2.75 0 0 0 22 15.25V4.75ZM19.25 3.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H8.26a2.75 2.75 0 0 0-1.763.64L3.5 19.645V4.75c0-.69.56-1.25 1.25-1.25h14.5Z" clip-rule="evenodd"/>
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
export class ChatBubbleSquareIconComponent {}
