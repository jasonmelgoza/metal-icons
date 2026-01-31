import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-duplicate-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2.25 0A2.25 2.25 0 0 0 0 2.25v7.5A2.25 2.25 0 0 0 2.25 12h.25a.75.75 0 1 0 0-1.5h-.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v.25a.75.75 0 1 0 1.5 0v-.25A2.25 2.25 0 0 0 9.75 0h-7.5Z"/>
  <path fill-rule="evenodd" d="M6.25 4A2.25 2.25 0 0 0 4 6.25v7.5A2.25 2.25 0 0 0 6.25 16h7.5A2.25 2.25 0 0 0 16 13.75v-7.5A2.25 2.25 0 0 0 13.75 4h-7.5ZM5.5 6.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd"/>
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
export class DuplicateIconComponent {}
