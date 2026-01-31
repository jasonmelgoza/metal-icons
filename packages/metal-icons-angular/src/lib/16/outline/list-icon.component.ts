import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-list-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 2 3.75Zm4 0A.75.75 0 0 1 6.75 3h6.5a.75.75 0 1 1 0 1.5h-6.5A.75.75 0 0 1 6 3.75Zm-4 4A.75.75 0 0 1 2.75 7h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 2 7.75Zm4 0A.75.75 0 0 1 6.75 7h6.5a.75.75 0 1 1 0 1.5h-6.5A.75.75 0 0 1 6 7.75Zm-4 4a.75.75 0 0 1 .75-.75h.5a.75.75 0 1 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
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
export class ListIconComponent {}
