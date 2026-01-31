import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-folder-minus-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" fill-rule="evenodd" d="m12.195 3.634-.829-.829A2.75 2.75 0 0 0 9.422 2H3.75A2.75 2.75 0 0 0 1 4.75v14.5A2.75 2.75 0 0 0 3.75 22h16.5A2.75 2.75 0 0 0 23 19.25V6.75A2.75 2.75 0 0 0 20.25 4h-7.172a1.25 1.25 0 0 1-.883-.366ZM9.422 3.5H3.75A1.25 1.25 0 0 0 2.5 4.75v14.5a1.25 1.25 0 0 0 1.25 1.25h16.5a1.25 1.25 0 0 0 1.25-1.25V6.75a1.25 1.25 0 0 0-1.25-1.25h-7.172c-.729 0-1.428-.29-1.944-.805l-.828-.83a1.251 1.251 0 0 0-.884-.365Z" clip-rule="evenodd"/>
  <path fill="#000" d="M15 12.25a.75.75 0 1 1 0 1.5H9a.75.75 0 1 1 0-1.5h6Z"/>
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
