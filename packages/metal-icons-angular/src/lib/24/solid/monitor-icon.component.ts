import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-monitor-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M1 4.75A2.75 2.75 0 0 1 3.75 2h16.5A2.75 2.75 0 0 1 23 4.75v10.5A2.75 2.75 0 0 1 20.25 18h-7.5v2.5H16a.75.75 0 1 1 0 1.5H8a.75.75 0 1 1 0-1.5h3.25V18h-7.5A2.75 2.75 0 0 1 1 15.25V4.75Z" clip-rule="evenodd"/>
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
export class MonitorIconComponent {}
