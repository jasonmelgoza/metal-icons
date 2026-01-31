import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-text-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M3 3.75A.75.75 0 0 1 3.75 3h16a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V4.5h-6.5v15h2a.75.75 0 1 1 0 1.5H9a.75.75 0 1 1 0-1.5h2v-15H4.5v1.75a.75.75 0 0 1-1.5 0v-2.5Z"/>
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
export class TextIconComponent {}
