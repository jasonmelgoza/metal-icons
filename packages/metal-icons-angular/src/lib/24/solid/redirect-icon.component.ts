import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-redirect-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 5.786c0-1.046 1.21-1.63 2.028-.978l7.45 5.922c.627.498.63 1.45.005 1.952l-7.45 5.997c-.817.659-2.033.076-2.033-.974v-2.753c-.96-.045-1.92.1-2.824.427-1.306.456-2.918 1.342-5.295 2.98a1.226 1.226 0 0 1-1.37.03 1.168 1.168 0 0 1-.479-1.327c.59-1.999 1.91-4.124 3.743-5.754C7.445 9.823 9.571 8.72 12 8.529V5.786Z" clip-rule="evenodd"/>
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
export class RedirectIconComponent {}
