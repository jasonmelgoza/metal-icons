import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-check-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M14.78 4.28a.75.75 0 0 0-1.06-1.06l-7.97 7.97-3.47-3.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l8.5-8.5Z"/>
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
