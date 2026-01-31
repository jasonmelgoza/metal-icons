import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-left-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M7.765 4.045a.75.75 0 1 0-1.03-1.09L2.237 7.203a.748.748 0 0 0-.001 1.093l4.499 4.25a.75.75 0 0 0 1.03-1.091L4.636 8.5h8.614a.75.75 0 1 0 0-1.5H4.636l3.129-2.955Z"/>
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
export class ArrowLeftIconComponent {}
