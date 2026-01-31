import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-arrow-right-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.343 2.343a8 8 0 1 0 11.314 11.314A8 8 0 0 0 2.343 2.343Zm5.728 2.588a.75.75 0 0 1 1.234-.186l2.5 2.75a.75.75 0 0 1 0 1.01l-2.5 2.75a.75.75 0 1 1-1.11-1.01l1.36-1.495H4.75a.75.75 0 0 1 0-1.5h4.805l-1.36-1.495a.75.75 0 0 1-.124-.824Z" clip-rule="evenodd"/>
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
export class CircleArrowRightIconComponent {}
