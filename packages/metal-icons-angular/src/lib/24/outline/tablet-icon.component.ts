import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-tablet-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H12Z"/>
  <path fill-rule="evenodd" d="M3.75 3A2.75 2.75 0 0 0 1 5.75v12.5A2.75 2.75 0 0 0 3.75 21h16.5A2.75 2.75 0 0 0 23 18.25V5.75A2.75 2.75 0 0 0 20.25 3H3.75ZM2.5 5.75c0-.69.56-1.25 1.25-1.25h16.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V5.75Z" clip-rule="evenodd"/>
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
export class TabletIconComponent {}
