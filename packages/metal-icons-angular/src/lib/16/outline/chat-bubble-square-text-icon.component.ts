import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chat-bubble-square-text-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 3.25A2.25 2.25 0 0 0 12.75 1h-9.5A2.25 2.25 0 0 0 1 3.25v11a.75.75 0 0 0 1.26.55l2.801-2.6a.75.75 0 0 1 .51-.2h7.179A2.249 2.249 0 0 0 15 9.75v-6.5Zm-2.25-.75a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H5.572a2.25 2.25 0 0 0-1.531.6L2.5 12.53V3.25a.75.75 0 0 1 .75-.75h9.5Z" clip-rule="evenodd"/>
  <path d="M5 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H5Zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H5Z"/>
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
export class ChatBubbleSquareTextIconComponent {}
