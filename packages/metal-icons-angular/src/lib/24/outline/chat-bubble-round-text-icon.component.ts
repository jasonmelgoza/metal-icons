import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chat-bubble-round-text-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M8 9.5A.75.75 0 0 0 8 11h8.5a.75.75 0 0 0 0-1.5H8Zm0 4A.75.75 0 0 0 8 15h5.5a.75.75 0 0 0 0-1.5H8Z"/>
  <path fill-rule="evenodd" d="M6.318 20.645c-.885.303-1.758.64-2.618 1.01h-.003l-.648.283a.75.75 0 0 1-.982-.998l.004-.01.014-.03.05-.113a36.65 36.65 0 0 0 1.21-3.052c.161-.48.286-.915.352-1.255a2.32 2.32 0 0 0 .048-.382v-.038A9.657 9.657 0 1 1 22 11.657c0 5.334-4.324 9.658-9.657 9.658a9.62 9.62 0 0 1-4.399-1.058c-.134.004-.267.02-.398.047-.332.064-.758.185-1.228.34Zm9.59-16.322a8.157 8.157 0 0 0-10.54 3.1 8.157 8.157 0 0 0-.264 7.999c.104.218.152.458.141.7a3.746 3.746 0 0 1-.075.643c-.085.436-.234.943-.403 1.448-.185.549-.402 1.12-.606 1.63.555-.223 1.117-.43 1.684-.621.495-.164.991-.31 1.417-.391.212-.041.427-.071.627-.074a1.44 1.44 0 0 1 .689.139 8.157 8.157 0 1 0 7.33-14.573Z" clip-rule="evenodd"/>
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
export class ChatBubbleRoundTextIconComponent {}
