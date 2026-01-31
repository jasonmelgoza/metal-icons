import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-slash-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M16.63 4.103a.75.75 0 0 0-1.027.268l-8.5 14.5a.75.75 0 1 0 1.294.758l8.5-14.5a.75.75 0 0 0-.267-1.026Z" clip-rule="evenodd"/>
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
export class SlashIconComponent {}
