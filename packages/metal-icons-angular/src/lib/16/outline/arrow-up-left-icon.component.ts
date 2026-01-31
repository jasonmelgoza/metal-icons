import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-up-left-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M3.057 3.463A.748.748 0 0 1 3.75 3h5.5a.75.75 0 0 1 0 1.5H5.56l7.22 7.22a.75.75 0 1 1-1.06 1.06L4.5 5.56v3.69a.75.75 0 0 1-1.5 0v-5.5c0-.102.02-.199.057-.287Z"/>
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
export class ArrowUpLeftIconComponent {}
