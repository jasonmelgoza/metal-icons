import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-disabled-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 0 1 10.535-5.096l-9.131 9.131A6.472 6.472 0 0 1 1.5 8Zm2.465 5.096a6.5 6.5 0 0 0 9.131-9.131l-9.131 9.131Z" clip-rule="evenodd"/>
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
export class DisabledIconComponent {}
