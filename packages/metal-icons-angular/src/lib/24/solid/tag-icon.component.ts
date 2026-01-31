import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-tag-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2.805 2.805A2.75 2.75 0 0 1 4.75 2h6.422c.73 0 1.428.29 1.944.805l8 8a2.75 2.75 0 0 1 0 3.89l-6.421 6.421a2.75 2.75 0 0 1-3.89 0l-8-8A2.752 2.752 0 0 1 2 11.172V4.75c0-.73.29-1.429.805-1.945Zm2.488 2.488A1 1 0 0 1 6 5h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-.707-1.707Z" clip-rule="evenodd"/>
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
export class TagIconComponent {}
