import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-annotation-16-solid',
  standalone: true,
  template: `
    <svg viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 1C13.9926 1 15 2.00736 15 3.25V9.75C15 10.9926 13.9926 12 12.75 12H10.4999L8.6132 14.6792C8.31446 15.1035 7.68554 15.1035 7.38679 14.6792L5.49999 12H3.25C2.00736 12 1 10.9926 1 9.75V3.25C1 2.00736 2.00736 1 3.25 1H12.75Z" fill="currentColor"/>
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
