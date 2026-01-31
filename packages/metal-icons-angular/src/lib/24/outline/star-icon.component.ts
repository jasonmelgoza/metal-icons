import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-star-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 1a.75.75 0 0 1 .673.418l2.992 6.065 6.694.978a.75.75 0 0 1 .414 1.28l-4.842 4.717 1.143 6.665a.75.75 0 0 1-1.089.79L12 18.766l-5.985 3.149a.75.75 0 0 1-1.089-.79l1.143-6.666-4.842-4.717a.75.75 0 0 1 .414-1.28l6.694-.978 2.992-6.065A.75.75 0 0 1 12 1Zm0 2.445L9.505 8.5a.75.75 0 0 1-.564.41l-5.58.816 4.037 3.933a.75.75 0 0 1 .216.664l-.952 5.556 4.989-2.625a.75.75 0 0 1 .698 0l4.99 2.625-.953-5.556a.75.75 0 0 1 .216-.664l4.037-3.933-5.58-.816a.75.75 0 0 1-.564-.41L12 3.445Z" clip-rule="evenodd"/>
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
export class StarIconComponent {}
