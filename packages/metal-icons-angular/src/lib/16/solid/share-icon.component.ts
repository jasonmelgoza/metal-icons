import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-share-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.75 7a.25.25 0 0 1 .25.25v3l.01.204A2 2 0 0 0 8 12.25l.204-.01A2 2 0 0 0 10 10.25V7h1.75A2.25 2.25 0 0 1 14 9.25v3.5A2.25 2.25 0 0 1 11.75 15h-7.5A2.25 2.25 0 0 1 2 12.75v-3.5A2.25 2.25 0 0 1 4.25 7h1.5Z"/>
  <path d="M8 1a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02l-1.95-2.1v6.59a.75.75 0 0 1-1.5 0V3.66L5.3 5.76a.75.75 0 1 1-1.1-1.02l3.25-3.5A.751.751 0 0 1 8 1Z"/>
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
export class ShareIconComponent {}
