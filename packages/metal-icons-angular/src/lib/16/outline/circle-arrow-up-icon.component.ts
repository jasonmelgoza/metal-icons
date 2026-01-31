import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-arrow-up-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.695 7.755a.75.75 0 0 0 1.06.05l1.495-1.36v4.805a.75.75 0 1 0 1.5 0V6.445l1.495 1.36a.75.75 0 0 0 1.01-1.11l-2.75-2.5a.75.75 0 0 0-1.01 0l-2.75 2.5a.75.75 0 0 0-.05 1.06Z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z" clip-rule="evenodd"/>
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
export class CircleArrowUpIconComponent {}
