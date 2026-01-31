import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-align-left-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M22 12a.75.75 0 0 1-.75.75H8.612l5.158 4.96a.75.75 0 1 1-1.04 1.08l-6.5-6.25a.75.75 0 0 1 0-1.08l6.5-6.25a.75.75 0 1 1 1.04 1.08l-5.158 4.96H21.25A.75.75 0 0 1 22 12ZM3.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 1 0 1.5 0V3.75Z"/>
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
export class AlignLeftIconComponent {}
