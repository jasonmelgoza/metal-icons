import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevrons-up-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.749.749 0 1 1-1.1 1.02L8 4.852 5.3 7.76Z"/>
  <path d="M5.3 12.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.748.748 0 0 1-.29 1.213.75.75 0 0 1-.81-.193L8 9.852 5.3 12.76Z"/>
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
export class ChevronsUpIconComponent {}
