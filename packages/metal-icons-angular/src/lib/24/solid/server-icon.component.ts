import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-server-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M16.5 13v9H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75H16.5Zm0-11v9H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2H16.5Zm3.75 11c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 22H18v-9h2.25Zm0-11c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 20.25 11H18V2h2.25Z"/>
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
export class ServerIconComponent {}
