import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chat-bubbles-square-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M14.25 2A2.75 2.75 0 0 1 17 4.75v.5a.75.75 0 1 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v10.94l2.531-2.026a.75.75 0 0 1 .938 1.172l-3.75 3A.75.75 0 0 1 1 17.25V4.75A2.75 2.75 0 0 1 3.75 2h10.5Z"/>
  <path fill-rule="evenodd" d="M9.75 7A2.75 2.75 0 0 0 7 9.75v7.5A2.75 2.75 0 0 0 9.75 20h8.048c.284 0 .56.097.781.274l3.203 2.562A.75.75 0 0 0 23 22.25V9.75A2.75 2.75 0 0 0 20.25 7H9.75ZM8.5 9.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v10.94l-1.984-1.587a2.75 2.75 0 0 0-1.718-.603H9.75c-.69 0-1.25-.56-1.25-1.25v-7.5Z" clip-rule="evenodd"/>
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
export class ChatBubblesSquareIconComponent {}
