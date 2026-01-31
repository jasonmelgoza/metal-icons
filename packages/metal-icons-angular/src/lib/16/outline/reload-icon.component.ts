import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-reload-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.248 1.307A.75.75 0 1 1 8.252.193l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.004-1.114l1.29-1.161a4.5 4.5 0 1 0 3.655 2.832.75.75 0 1 1 1.398-.546A6 6 0 1 1 8.018 2l-.77-.693Z"/>
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
export class ReloadIconComponent {}
