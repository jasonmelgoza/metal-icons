import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-battery-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M2.25 3A2.25 2.25 0 0 0 0 5.25v5.5A2.25 2.25 0 0 0 2.25 13h8.5A2.25 2.25 0 0 0 13 10.75v-5.5A2.25 2.25 0 0 0 10.75 3h-8.5Z" clip-rule="evenodd"/>
  <path fill="#000" d="M15.5 6.75a.75.75 0 1 0-1.5 0v2.5a.75.75 0 1 0 1.5 0v-2.5Z"/>
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
export class BatteryIconComponent {}
