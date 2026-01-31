import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-bookmark-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v16.376a1 1 0 0 1-1.382.924l-6.522-2.699a.249.249 0 0 0-.192 0L5.382 22.05A1 1 0 0 1 4 21.126V4.75ZM6.75 3.5c-.69 0-1.25.56-1.25 1.25v15.628l5.83-2.413a1.75 1.75 0 0 1 1.34 0l5.83 2.413V4.75c0-.69-.56-1.25-1.25-1.25H6.75Z" clip-rule="evenodd"/>
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
