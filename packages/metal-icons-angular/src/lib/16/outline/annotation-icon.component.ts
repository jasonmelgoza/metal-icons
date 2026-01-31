import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-annotation-16-outline',
  standalone: true,
  template: `
    <svg viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.72165 10.5H12.75C13.1642 10.5 13.5 10.1642 13.5 9.75V3.25C13.5 2.83579 13.1642 2.5 12.75 2.5H3.25C2.83579 2.5 2.5 2.83579 2.5 3.25V9.75C2.5 10.1642 2.83579 10.5 3.25 10.5H6.27828L7.99999 12.9448L9.72165 10.5ZM10.4999 12H12.75C13.9926 12 15 10.9926 15 9.75V3.25C15 2.00736 13.9926 1 12.75 1H3.25C2.00736 1 1 2.00736 1 3.25V9.75C1 10.9926 2.00736 12 3.25 12H5.49999L7.38679 14.6792C7.68554 15.1035 8.31446 15.1035 8.6132 14.6792L10.4999 12Z" fill="currentColor"/>
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
export class AnnotationIconComponent {}
