import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-lock-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 9.25a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0v-1A.75.75 0 0 1 8 9.25Z"/>
  <path fill-rule="evenodd" d="M4 5.014v-.93c0-1.078.417-2.114 1.165-2.881A3.96 3.96 0 0 1 8 0a3.96 3.96 0 0 1 2.835 1.203A4.127 4.127 0 0 1 12 4.083v.93a2.25 2.25 0 0 1 2 2.237v5.5A2.25 2.25 0 0 1 11.75 15h-7.5A2.25 2.25 0 0 1 2 12.75v-5.5a2.25 2.25 0 0 1 2-2.236ZM6.239 2.25A2.46 2.46 0 0 1 8 1.5c.657 0 1.29.267 1.761.75.471.483.739 1.142.739 1.833V5h-5v-.917c0-.69.268-1.35.739-1.833ZM11.75 6.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 .75-.75h7.5Z" clip-rule="evenodd"/>
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
