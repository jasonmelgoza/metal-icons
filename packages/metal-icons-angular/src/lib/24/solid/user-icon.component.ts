import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-user-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7.25 7.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Zm-.651 7.56A8.998 8.998 0 0 1 12 13.5c1.944 0 3.835.635 5.401 1.81a9.381 9.381 0 0 1 3.315 4.717A.75.75 0 0 1 20 21H4a.75.75 0 0 1-.716-.973 9.381 9.381 0 0 1 3.315-4.718Z" clip-rule="evenodd"/>
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
export class UserIconComponent {}
