import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-mail-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M22.482 4.144A2.75 2.75 0 0 0 20.25 3H3.75a2.75 2.75 0 0 0-2.232 1.144L12 12.062l10.482-7.918ZM1 17.94V5.75c0-.04 0-.079.003-.118L8 10.937 1 17.94Z"/>
  <path d="M22.607 19.667A2.747 2.747 0 0 1 20.25 21H3.75a2.75 2.75 0 0 1-2.357-1.333l7.82-7.819L11.55 13.6a.75.75 0 0 0 .9 0l2.337-1.753 7.82 7.82Zm.39-14.034L23 5.75v12.19l-7-7.003 6.997-5.304Z"/>
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
