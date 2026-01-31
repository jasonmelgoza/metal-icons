import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-chevrons-up-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.293 11.768a.75.75 0 1 1-1.086-1.036l5.25-5.5a.75.75 0 0 1 1.085 0l5.25 5.5a.75.75 0 0 1-1.085 1.036L12 6.836l-4.707 4.932Z"/>
  <path d="M7.293 18.768a.75.75 0 1 1-1.086-1.036l5.25-5.5a.75.75 0 0 1 1.085 0l5.25 5.5a.75.75 0 0 1-1.085 1.036L12 13.836l-4.707 4.932Z"/>
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
export class ChevronsUpIconComponent {}
