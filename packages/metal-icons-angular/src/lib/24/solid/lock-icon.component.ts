import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-lock-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6 10.104V6.75c0-1.537.641-3.003 1.77-4.079A6.136 6.136 0 0 1 12 1c1.58 0 3.102.597 4.23 1.671A5.632 5.632 0 0 1 18 6.75v3.354a2.75 2.75 0 0 1 2 2.646v7.5A2.75 2.75 0 0 1 17.25 23H6.75A2.75 2.75 0 0 1 4 20.25v-7.5a2.75 2.75 0 0 1 2-2.646Zm2.805-6.346A4.636 4.636 0 0 1 12 2.5c1.205 0 2.354.456 3.195 1.258.84.8 1.305 1.877 1.305 2.992V10h-9V6.75c0-1.115.465-2.192 1.305-2.992ZM12 16.25a.75.75 0 0 0-.75.75v2a.75.75 0 1 0 1.5 0v-2a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"/>
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
export class LockIconComponent {}
