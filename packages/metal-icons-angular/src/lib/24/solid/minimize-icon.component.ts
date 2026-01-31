import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-minimize-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M20.78 4.28a.75.75 0 0 0-1.06-1.06L14.5 8.44V4.75a.75.75 0 1 0-1.5 0v5.5a.745.745 0 0 0 .75.75h5.5a.75.75 0 1 0 0-1.5h-3.69l5.22-5.22ZM4 13.75c0 .414.336.75.75.75h3.69l-5.22 5.22a.749.749 0 1 0 1.06 1.06l5.22-5.22v3.69a.75.75 0 0 0 1.5 0v-5.5a.747.747 0 0 0-.215-.525l-.01-.01A.747.747 0 0 0 10.25 13h-5.5a.75.75 0 0 0-.75.75Z"/>
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
export class MinimizeIconComponent {}
