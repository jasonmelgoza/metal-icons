import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-left-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9.61 10.908a.75.75 0 0 1-.766-.027l-3.5-2.25a.75.75 0 0 1 0-1.262l3.5-2.25a.75.75 0 0 1 1.156.63v4.5a.75.75 0 0 1-.39.659Z"/>
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" clip-rule="evenodd"/>
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
export class CircleCaretLeftIconComponent {}
