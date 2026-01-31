import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-login-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M14.5 2.75a.75.75 0 0 1 .75-.75h4A2.75 2.75 0 0 1 22 4.75v14.5A2.75 2.75 0 0 1 19.25 22h-4a.75.75 0 1 1 0-1.5h4c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25h-4a.75.75 0 0 1-.75-.75Z"/>
  <path d="M9.47 6.22a.75.75 0 0 1 1.06 0l5 5a.745.745 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3A.75.75 0 1 1 3 11h10.19L9.47 7.28a.75.75 0 0 1 0-1.06Z"/>
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
export class LoginIconComponent {}
