import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-up-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM5.092 9.61a.75.75 0 0 1 .027-.766l2.25-3.5a.75.75 0 0 1 1.262 0l2.25 3.5A.75.75 0 0 1 10.25 10h-4.5a.75.75 0 0 1-.658-.39Z" clip-rule="evenodd"/>
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
export class CircleCaretUpIconComponent {}
