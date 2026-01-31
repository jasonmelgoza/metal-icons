import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-check-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M21.78 6.28a.75.75 0 0 0-1.06-1.06L8.75 17.19l-5.47-5.47a.75.75 0 0 0-1.06 1.06l6 6a.75.75 0 0 0 1.06 0l12.5-12.5Z"/>
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
export class CheckIconComponent {}
