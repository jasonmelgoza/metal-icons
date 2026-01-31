import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-zoom-out-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4.22 6.72a.75.75 0 0 1 .53-.22h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.53-1.28Z"/>
  <path fill-rule="evenodd" d="M1.694 4.387a6.25 6.25 0 0 0 9.413 7.78l2.613 2.613a.75.75 0 1 0 1.06-1.06l-2.612-2.613a6.25 6.25 0 1 0-10.474-6.72Zm2.197-.496a4.75 4.75 0 1 1 6.718 6.718A4.75 4.75 0 0 1 3.89 3.89Z" clip-rule="evenodd"/>
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
export class ZoomOutIconComponent {}
