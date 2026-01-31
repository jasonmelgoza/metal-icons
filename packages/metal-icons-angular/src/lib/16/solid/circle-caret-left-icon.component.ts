import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-left-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8Zm-6.39 2.908a.75.75 0 0 1-.766-.027l-3.5-2.25a.75.75 0 0 1 0-1.262l3.5-2.25A.75.75 0 0 1 10 5.75v4.5a.75.75 0 0 1-.39.658Z" clip-rule="evenodd"/>
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
