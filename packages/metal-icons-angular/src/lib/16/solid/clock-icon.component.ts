import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-clock-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8.5-4.25a.75.75 0 0 0-1.5 0V8c0 .284.16.544.415.67l2.5 1.25a.749.749 0 1 0 .67-1.34L8.5 7.535V3.75Z" clip-rule="evenodd"/>
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
export class ClockIconComponent {}
