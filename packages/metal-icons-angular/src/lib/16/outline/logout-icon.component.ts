import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-logout-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.5 1.75A.75.75 0 0 0 5.75 1h-2.5A2.25 2.25 0 0 0 1 3.25v9.5A2.25 2.25 0 0 0 3.25 15h2.5a.75.75 0 1 0 0-1.5h-2.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 0 .75-.75Z"/>
  <path d="M9.97 3.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H6A.75.75 0 0 1 6 7h6.19L9.97 4.78a.75.75 0 0 1 0-1.06Z"/>
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
