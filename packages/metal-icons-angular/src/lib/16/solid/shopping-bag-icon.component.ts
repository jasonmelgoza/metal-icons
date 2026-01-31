import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-shopping-bag-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.75 4c0-.874.303-1.468.702-1.845A2.25 2.25 0 0 1 8 1.563a2.25 2.25 0 0 1 1.547.592c.4.377.703.97.703 1.845h-4.5Zm-1.5 0c0-1.25.447-2.25 1.172-2.936A3.75 3.75 0 0 1 8 .062a3.75 3.75 0 0 1 2.577 1.002C11.303 1.75 11.75 2.75 11.75 4h.403a1 1 0 0 1 .986.836l1.376 8.253A2.5 2.5 0 0 1 12.049 16H3.95a2.5 2.5 0 0 1-2.466-2.911L2.86 4.836A1 1 0 0 1 3.847 4h.403Z" clip-rule="evenodd"/>
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
