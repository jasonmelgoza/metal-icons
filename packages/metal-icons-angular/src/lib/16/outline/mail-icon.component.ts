import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-mail-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 3.25A2.25 2.25 0 0 1 2.25 1h11.5A2.25 2.25 0 0 1 16 3.25v9.5A2.25 2.25 0 0 1 13.75 15H2.25A2.25 2.25 0 0 1 0 12.75v-9.5Zm2.25-.75a.75.75 0 0 0-.748.69L8 8.297l6.498-5.105a.75.75 0 0 0-.748-.691L2.25 2.5Zm-.75 9.885V5.097l3.865 3.037L1.5 12.385ZM2.514 13.5h10.972L9.452 9.063l-.989.777a.75.75 0 0 1-.926 0l-.99-.777L2.515 13.5h-.001Zm8.12-5.366 3.866 4.251V5.097l-3.865 3.037h-.001Z" clip-rule="evenodd"/>
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
export class MailIconComponent {}
