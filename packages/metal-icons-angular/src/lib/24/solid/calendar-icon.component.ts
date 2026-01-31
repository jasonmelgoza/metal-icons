import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-calendar-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M16.78.47c.141.14.22.331.22.53v1h2.25A2.75 2.75 0 0 1 22 4.75V8H2V4.75A2.75 2.75 0 0 1 4.75 2H7V1a.75.75 0 0 1 1.5 0v1h7V1a.75.75 0 0 1 1.28-.53ZM2 9.5v9.75A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25V9.5H2Z"/>
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
export class CalendarIconComponent {}
