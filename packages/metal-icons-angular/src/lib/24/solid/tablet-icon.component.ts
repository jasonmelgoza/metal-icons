import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-tablet-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M1.805 3.805A2.75 2.75 0 0 1 3.75 3h16.5A2.75 2.75 0 0 1 23 5.75v12.5A2.75 2.75 0 0 1 20.25 21H3.75A2.75 2.75 0 0 1 1 18.25V5.75c0-.73.29-1.429.805-1.945Zm9.486 13.488a.993.993 0 0 1 .704-.293h.01c.264 0 .517.105.704.293A1.002 1.002 0 0 1 12.005 19h-.01a.993.993 0 0 1-.704-.293 1.002 1.002 0 0 1 0-1.414Z" clip-rule="evenodd"/>
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
