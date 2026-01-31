import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-credit-card-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M0 5.75A2.75 2.75 0 0 1 2.75 3h18.5A2.75 2.75 0 0 1 24 5.75V8H0V5.75Z"/>
  <path fill-rule="evenodd" d="M0 11v7.25A2.75 2.75 0 0 0 2.75 21h18.5A2.75 2.75 0 0 0 24 18.25V11H0Zm4.75 4a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-2.5Z" clip-rule="evenodd"/>
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
