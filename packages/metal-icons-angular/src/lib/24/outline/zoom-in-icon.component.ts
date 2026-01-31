import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-zoom-in-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M10.75 6.5a.75.75 0 0 1 .75.75V10h2.75a.75.75 0 1 1 0 1.5H11.5v2.75a.75.75 0 1 1-1.5 0V11.5H7.25a.75.75 0 1 1 0-1.5H10V7.25a.75.75 0 0 1 .75-.75Z"/>
  <path fill-rule="evenodd" d="M10.75 2a8.75 8.75 0 1 0 5.634 15.445l4.336 4.335a.75.75 0 1 0 1.06-1.06l-4.335-4.336A8.75 8.75 0 0 0 10.75 2ZM3.5 10.75a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0Z" clip-rule="evenodd"/>
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
export class ZoomInIconComponent {}
