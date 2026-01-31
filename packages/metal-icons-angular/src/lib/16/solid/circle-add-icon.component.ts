import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-add-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8.53-3.53A.75.75 0 0 0 7.25 5v2.25H5a.75.75 0 0 0 0 1.5h2.25V11a.75.75 0 1 0 1.5 0V8.75H11a.75.75 0 1 0 0-1.5H8.75V5a.75.75 0 0 0-.22-.53Z" clip-rule="evenodd"/>
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
export class CircleAddIconComponent {}
