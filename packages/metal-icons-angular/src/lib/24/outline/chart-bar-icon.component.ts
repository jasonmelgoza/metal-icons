import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chart-bar-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M18 3a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1Zm-6 6a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V10a1 1 0 0 1 1-1Zm-5 7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"/>
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
export class ChartBarIconComponent {}
