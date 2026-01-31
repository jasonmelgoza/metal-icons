import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-alarm-16-solid',
  standalone: true,
  template: `
    <svg  xmlns="http://www.w3.org/2000/svg">
  <path d="M5.558 1.909a7.5 7.5 0 0 0-3.702 2.79L.628 3.837A9 9 0 0 1 5.07.49l.488 1.419Z" fill="#000"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm.5 3.5a.75.75 0 1 0-1.5 0v3.67l3.607 2.219a.75.75 0 0 0 .786-1.278L8.5 8.581V5.75Z" fill="#000"/>
  <path d="M15.372 3.838A9 9 0 0 0 10.93.49l-.488 1.419a7.5 7.5 0 0 1 3.702 2.79l1.228-.861Z" fill="#000"/>
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
export class AlarmIconComponent {}
