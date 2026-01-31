import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-text-align-center-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 1 0 0-1.5H1.75Zm2 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 1 0 0-1.5h-8.5ZM1 9.75A.75.75 0 0 1 1.75 9h12.5a.75.75 0 1 1 0 1.5H1.75A.75.75 0 0 1 1 9.75ZM3.75 12a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5h-8.5Z"/>
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
export class TextAlignCenterIconComponent {}
