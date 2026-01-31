import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-logout-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M9.5 2.75A.75.75 0 0 0 8.75 2h-4A2.75 2.75 0 0 0 2 4.75v14.5A2.75 2.75 0 0 0 4.75 22h4a.75.75 0 1 0 0-1.5h-4c-.69 0-1.25-.56-1.25-1.25V4.75c0-.69.56-1.25 1.25-1.25h4a.75.75 0 0 0 .75-.75Z"/>
  <path d="M15.47 6.22a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9A.75.75 0 1 1 9 11h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z"/>
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
export class LogoutIconComponent {}
