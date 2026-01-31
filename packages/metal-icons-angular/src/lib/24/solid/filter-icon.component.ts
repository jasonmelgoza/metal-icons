import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-filter-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M20.722 7.472c.258-.258.403-.607.403-.972V3.75A2.75 2.75 0 0 0 18.375 1H5.75A2.75 2.75 0 0 0 3 3.75V6.5c0 .365.145.714.403.972L9 14v8a1 1 0 0 0 1 1h1.5a1 1 0 0 0 .8-.4L15 19v-5l5.722-6.528Z" clip-rule="evenodd"/>
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
