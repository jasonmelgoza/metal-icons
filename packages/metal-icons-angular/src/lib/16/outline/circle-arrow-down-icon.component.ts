import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-arrow-down-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z" clip-rule="evenodd"/>
  <path d="M5.755 8.195a.75.75 0 0 0-1.01 1.11l2.75 2.5a.748.748 0 0 0 1.01 0l2.75-2.5a.75.75 0 1 0-1.01-1.11L8.75 9.555V4.75a.75.75 0 0 0-1.5 0v4.805l-1.495-1.36Z"/>
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
export class CircleArrowDownIconComponent {}
