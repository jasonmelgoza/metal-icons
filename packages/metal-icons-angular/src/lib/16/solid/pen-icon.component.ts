import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-pen-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.505.745a2.543 2.543 0 0 1 3.596 0l.154.154a2.543 2.543 0 0 1 0 3.596L4.867 14.884a.75.75 0 0 1-.349.197l-3.586.897a.75.75 0 0 1-.91-.91l.897-3.586a.75.75 0 0 1 .197-.349l8.966-8.966h.001L11.505.744Z" clip-rule="evenodd"/>
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
export class PenIconComponent {}
