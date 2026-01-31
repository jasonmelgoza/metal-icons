import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-bookmark-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.25 1A2.25 2.25 0 0 0 2 3.25v10.83a1 1 0 0 0 1.478.878l4.403-2.394a.25.25 0 0 1 .238 0l4.403 2.394A1 1 0 0 0 14 14.08V3.25A2.25 2.25 0 0 0 11.75 1h-7.5Z"/>
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
export class BookmarkIconComponent {}
