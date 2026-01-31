import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevrons-down-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.293 5.232a.75.75 0 0 0-1.086 1.036l5.25 5.5a.75.75 0 0 0 1.085 0l5.25-5.5a.75.75 0 0 0-1.085-1.036L12 10.164 7.293 5.232Z"/>
  <path d="M7.293 12.232a.75.75 0 0 0-1.086 1.036l5.25 5.5a.75.75 0 0 0 1.085 0l5.25-5.5a.75.75 0 0 0-1.085-1.036L12 17.164l-4.707-4.932Z"/>
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
export class ChevronsDownIconComponent {}
