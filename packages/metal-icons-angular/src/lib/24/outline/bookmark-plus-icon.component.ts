import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-bookmark-plus-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M12.53 7.22a.75.75 0 0 0-1.28.53V10H9a.75.75 0 1 0 0 1.5h2.25v2.25a.75.75 0 1 0 1.5 0V11.5H15a.75.75 0 1 0 0-1.5h-2.25V7.75a.75.75 0 0 0-.22-.53Z"/>
  <path fill="#000" fill-rule="evenodd" d="M4.805 2.805A2.75 2.75 0 0 0 4 4.75v16.376a1 1 0 0 0 1.382.924l6.522-2.699a.249.249 0 0 1 .192 0l6.522 2.699A1 1 0 0 0 20 21.126V4.75A2.75 2.75 0 0 0 17.25 2H6.75c-.73 0-1.429.29-1.945.805ZM5.5 4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v15.628l-5.83-2.413a1.75 1.75 0 0 0-1.34 0L5.5 20.378V4.75Z" clip-rule="evenodd"/>
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
