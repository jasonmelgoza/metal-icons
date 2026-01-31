import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-filter-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M14.177 4.177 9.47 8.884l-.22.22V13a.25.25 0 0 1-.073.177l-2 2a.25.25 0 0 1-.128.068l.146.736-.146-.736A.25.25 0 0 1 6.75 15V9.104l-.22-.22-4.707-4.707A.25.25 0 0 1 1.75 4V2.25a1.5 1.5 0 0 1 1.5-1.5h9.5a1.5 1.5 0 0 1 1.5 1.5V4a.25.25 0 0 1-.073.177Z"/>
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
export class FilterIconComponent {}
