import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevron-left-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M15.79 18.77a.75.75 0 0 0-.02-1.06L9.832 12l5.938-5.71a.75.75 0 1 0-1.04-1.08l-6.5 6.25a.75.75 0 0 0 0 1.08l6.5 6.25a.75.75 0 0 0 1.06-.02Z" clip-rule="evenodd"/>
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
export class ChevronLeftIconComponent {}
