import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-face-neutral-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" clip-rule="evenodd"/>
  <path fill="#000" d="M5 6a1 1 0 0 1 1-1h.007a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm5-1a1 1 0 0 0 0 2h.007a1 1 0 1 0 0-2H10Zm-5.25 5.75A.75.75 0 0 1 5.5 10h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"/>
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
