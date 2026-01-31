import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-send-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.318.12a2 2 0 0 1 2.562 2.561l-3.988 11.944v.001a1.998 1.998 0 0 1-1.441 1.318 1.978 1.978 0 0 1-1.878-.536l-2.04-2.029-2.124 1.098a.75.75 0 0 1-1.094-.686l.092-3.545L.58 7.421a1.977 1.977 0 0 1-.541-1.788 1.998 1.998 0 0 1 1.32-1.525l.004-.002L13.318.12ZM4.906 10.303l-.058 2.259 1.482-.766a.75.75 0 0 1 .873.134l2.439 2.426a.477.477 0 0 0 .455.13l.01-.002a.5.5 0 0 0 .36-.33l.001-.002 3.923-11.75-9.485 7.9Zm7.697-8.363L1.84 5.528a.499.499 0 0 0-.328.382l-.003.017a.475.475 0 0 0 .13.432L4.21 8.93l8.392-6.989Z" clip-rule="evenodd"/>
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
