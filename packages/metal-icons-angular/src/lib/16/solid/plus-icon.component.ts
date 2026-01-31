import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-plus-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 3.5a.75.75 0 0 0-1.5 0V7H4a.75.75 0 0 0 0 1.5h3.5V12A.75.75 0 1 0 9 12V8.5h3.5a.75.75 0 1 0 0-1.5H9V3.5Z"/>
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
export class PlusIconComponent {}
