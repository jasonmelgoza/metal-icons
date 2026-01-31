import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-arrow-up-right-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M12.943 3.463A.748.748 0 0 0 12.25 3h-5.5a.75.75 0 0 0 0 1.5h3.69l-7.22 7.22a.75.75 0 1 0 1.06 1.06l7.22-7.22v3.69a.75.75 0 1 0 1.5 0v-5.5a.746.746 0 0 0-.057-.287Z"/>
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
export class ArrowUpRightIconComponent {}
