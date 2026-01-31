import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-credit-card-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M4.75 15a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-2.5Z"/>
  <path fill-rule="evenodd" d="M0 5.75A2.75 2.75 0 0 1 2.75 3h18.5A2.75 2.75 0 0 1 24 5.75v12.5A2.75 2.75 0 0 1 21.25 21H2.75A2.75 2.75 0 0 1 0 18.25V5.75Zm22.5 0V8h-21V5.75c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25Zm0 5.25h-21v7.25c0 .69.56 1.25 1.25 1.25h18.5c.69 0 1.25-.56 1.25-1.25V11Z" clip-rule="evenodd"/>
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
export class CreditCardIconComponent {}
