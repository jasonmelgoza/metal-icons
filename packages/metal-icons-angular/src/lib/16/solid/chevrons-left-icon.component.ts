import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevrons-left-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.76 5.3a.75.75 0 0 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.749.749 0 1 0 1.02-1.1L4.852 8 7.76 5.3Z"/>
  <path d="M12.76 5.3a.75.75 0 0 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.748.748 0 0 0 1.213-.29.75.75 0 0 0-.193-.81L9.852 8l2.908-2.7Z"/>
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
export class ChevronsLeftIconComponent {}
