import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-minimize-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 4.94V2.75a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 1 0 0-1.5h-2.19l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 4.94ZM2.75 8.5a.75.75 0 0 0 0 1.5h2.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06L6 11.06v2.19a.75.75 0 1 0 1.5 0v-4a.75.75 0 0 0-.75-.75h-4Z"/>
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
export class MinimizeIconComponent {}
