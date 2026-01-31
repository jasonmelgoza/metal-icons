import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-airplay-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M20.5 15V7A1.5 1.5 0 0 0 19 5.5H5A1.5 1.5 0 0 0 3.5 7v8A1.5 1.5 0 0 0 5 16.5h1.25a.75.75 0 0 1 0 1.5H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1.25a.75.75 0 0 1 0-1.5H19a1.5 1.5 0 0 0 1.5-1.5Z"/>
  <path d="M10.96 13.562a1.25 1.25 0 0 1 2.08 0l2.995 4.495A1.25 1.25 0 0 1 14.995 20h-5.99l-.183-.013a1.25 1.25 0 0 1-.857-1.93l2.995-4.495ZM9.472 18.5h5.056L12 14.704 9.472 18.5Z"/>
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
export class AirplayIconComponent {}
