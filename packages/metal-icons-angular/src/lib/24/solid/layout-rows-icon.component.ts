import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-layout-rows-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M23 4.75A2.75 2.75 0 0 0 20.25 2H3.75A2.75 2.75 0 0 0 1 4.75V8h22V4.75ZM1 14.5v-5h22v5H1ZM1 16v3.75A2.25 2.25 0 0 0 3.25 22h17.5A2.25 2.25 0 0 0 23 19.75V16H1Z"/>
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
export class LayoutRowsIconComponent {}
