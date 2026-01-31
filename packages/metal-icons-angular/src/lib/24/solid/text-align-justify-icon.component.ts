import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-text-align-justify-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5H2.75Zm0 4a.75.75 0 0 0 0 1.5h18.5a.75.75 0 1 0 0-1.5H2.75ZM2 13.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2.75 17a.75.75 0 1 0 0 1.5h18.5a.75.75 0 1 0 0-1.5H2.75Z"/>
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
export class TextAlignJustifyIconComponent {}
