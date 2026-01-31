import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chat-bubble-square-dots-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M21.195 2.805A2.75 2.75 0 0 1 22 4.75v10.5A2.75 2.75 0 0 1 19.25 18H8.26a1.25 1.25 0 0 0-.801.291l-4.228 3.534A.75.75 0 0 1 2 21.25V4.75A2.75 2.75 0 0 1 4.75 2h14.5c.73 0 1.429.29 1.945.805ZM8 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd"/>
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
export class ChatBubbleSquareDotsIconComponent {}
