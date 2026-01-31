import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-briefcase-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9.75 2A2.75 2.75 0 0 0 7 4.75V6H3.75A2.75 2.75 0 0 0 1 8.75v10.5A2.75 2.75 0 0 0 3.75 22h16.5A2.75 2.75 0 0 0 23 19.25V8.75A2.75 2.75 0 0 0 20.25 6H17V4.75A2.75 2.75 0 0 0 14.25 2h-4.5Zm5.75 4V4.75c0-.69-.56-1.25-1.25-1.25h-4.5c-.69 0-1.25.56-1.25 1.25V6h7Z" clip-rule="evenodd"/>
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
export class BriefcaseIconComponent {}
