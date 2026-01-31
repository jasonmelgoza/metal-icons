import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-folder-minus-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M9.871 3a.75.75 0 0 1-.53-.22L8.22 1.66A2.25 2.25 0 0 0 6.629 1H2.25A2.25 2.25 0 0 0 0 3.25v9.5A2.25 2.25 0 0 0 2.25 15h11.5A2.25 2.25 0 0 0 16 12.75v-7.5A2.25 2.25 0 0 0 13.75 3H9.871Zm-3.243-.5H2.25a.75.75 0 0 0-.75.75v9.5a.75.75 0 0 0 .75.75h11.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75H9.87a2.25 2.25 0 0 1-1.59-.659L7.16 2.72a.75.75 0 0 0-.53-.22Z" clip-rule="evenodd"/>
  <path fill="#000" d="M10 7.75a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1 0-1.5h4Z"/>
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
export class FolderMinusIconComponent {}
