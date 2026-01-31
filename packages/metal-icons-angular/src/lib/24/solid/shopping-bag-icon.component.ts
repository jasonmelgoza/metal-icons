import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-shopping-bag-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7 7c0-1.905.58-3.407 1.524-4.442A4.688 4.688 0 0 1 12 1c1.271 0 2.536.525 3.476 1.558C16.42 3.593 17 5.095 17 7h.896c.63 0 1.163.47 1.24 1.095l1.478 11.814A2.75 2.75 0 0 1 17.884 23H6.116a2.75 2.75 0 0 1-2.729-3.091L4.863 8.095A1.25 1.25 0 0 1 6.103 7H7Zm1.5 0c0-1.595.482-2.718 1.133-3.433A3.188 3.188 0 0 1 12 2.5c.854 0 1.714.35 2.367 1.067C15.018 4.282 15.5 5.405 15.5 7h-7Z" clip-rule="evenodd"/>
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
export class ShoppingBagIconComponent {}
