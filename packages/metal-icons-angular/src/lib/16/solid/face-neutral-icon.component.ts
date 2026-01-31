import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-face-neutral-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M8 0a8 8 0 1 1 .001 16.001A8 8 0 0 1 8 0ZM5.5 10a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5ZM6 5a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2H6Zm4 0a1 1 0 0 0 0 2h.007a1 1 0 0 0 0-2H10Z" clip-rule="evenodd"/>
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
export class FaceNeutralIconComponent {}
