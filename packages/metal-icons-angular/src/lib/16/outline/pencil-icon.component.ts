import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-pencil-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path fill-rule="evenodd" d="M13.303 0c-.675 0-1.321.268-1.798.745l-1.422 1.422h-.001l-8.966 8.966a.75.75 0 0 0-.197.349l-.897 3.586a.75.75 0 0 0 .91.91l3.586-.897a.75.75 0 0 0 .349-.197L15.255 4.495a2.543 2.543 0 0 0 0-3.596l-.154-.154A2.543 2.543 0 0 0 13.303 0ZM2.323 12.047l8.29-8.29 1.63 1.63-8.29 8.29-2.172.542.543-2.172ZM14.5 2.697c0 .277-.11.542-.305.738l-.895.895-1.626-1.633.891-.892a1.044 1.044 0 0 1 1.476 0l.154.155c.195.195.305.46.305.737Z" clip-rule="evenodd"/>
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
export class PencilIconComponent {}
