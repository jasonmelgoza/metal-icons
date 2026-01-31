import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-repeat-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11.238.68a.75.75 0 0 0-.976 1.14l1.96 1.68H4.418A3.417 3.417 0 0 0 1 6.917v.833a.75.75 0 0 0 1.5 0v-.833A1.917 1.917 0 0 1 4.417 5h7.806l-1.96 1.68a.75.75 0 1 0 .975 1.14l3.5-3a.75.75 0 0 0 0-1.14l-3.5-3Z"/>
  <path d="M5.82 8.262a.75.75 0 0 1-.082 1.057L3.778 11h7.805A1.916 1.916 0 0 0 13.5 9.083V8.25a.75.75 0 1 1 1.5 0v.833a3.417 3.417 0 0 1-3.417 3.417H3.777l1.961 1.68a.751.751 0 0 1-.976 1.14l-3.5-3a.75.75 0 0 1 0-1.14l3.5-3a.75.75 0 0 1 1.057.082h.001Z"/>
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
export class RepeatIconComponent {}
