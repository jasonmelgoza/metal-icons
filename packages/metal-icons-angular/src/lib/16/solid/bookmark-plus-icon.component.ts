import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-bookmark-plus-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M4.25 1A2.25 2.25 0 0 0 2 3.25v10.83a1 1 0 0 0 1.478.878l4.403-2.394a.25.25 0 0 1 .238 0l4.403 2.394A1 1 0 0 0 14 14.08V3.25A2.25 2.25 0 0 0 11.75 1h-7.5Zm3 3.75a.75.75 0 0 1 1.5 0V6H10a.75.75 0 1 1 0 1.5H8.75v1.25a.75.75 0 0 1-1.5 0V7.5H6A.75.75 0 0 1 6 6h1.25V4.75Z" clip-rule="evenodd"/>
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
export class BookmarkPlusIconComponent {}
