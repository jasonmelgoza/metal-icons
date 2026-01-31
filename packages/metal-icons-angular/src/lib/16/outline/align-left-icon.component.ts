import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-align-left-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M15 8a.75.75 0 0 1-.75.75H6.636l3.129 2.955a.75.75 0 0 1-1.03 1.09l-4.5-4.25A.747.747 0 0 1 4 8.012v-.024a.747.747 0 0 1 .211-.51l.005-.004a.857.857 0 0 1 .02-.02l4.499-4.25a.75.75 0 0 1 1.03 1.091L6.636 7.25h7.614A.75.75 0 0 1 15 8ZM2.5 2.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 1 0 1.5 0V2.75Z"/>
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
