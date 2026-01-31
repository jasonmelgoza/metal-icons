import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-reload-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.24 1.3A.75.75 0 1 1 12.26.2l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.217-2.06a7.5 7.5 0 1 0 5.532 4.633.752.752 0 0 1 .713-1.03.75.75 0 0 1 .684.484 9 9 0 1 1-7.237-5.654L11.24 1.3Z"/>
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
export class ReloadIconComponent {}
