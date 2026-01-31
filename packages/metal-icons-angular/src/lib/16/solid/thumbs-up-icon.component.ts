import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-thumbs-up-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.31.716 4 6.366V16h8.511a2.25 2.25 0 0 0 2.224-1.912l.994-6.549a2.25 2.25 0 0 0-2.224-2.588H9.988V2.575A2.575 2.575 0 0 0 7.412 0 1.206 1.206 0 0 0 6.31.716ZM2.25 16V6.366A2.25 2.25 0 0 0 0 8.616v5.134A2.25 2.25 0 0 0 2.25 16Z"/>
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
export class ThumbsUpIconComponent {}
