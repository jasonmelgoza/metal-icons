import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-layout-rows-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 3.25A2.25 2.25 0 0 0 13.75 1H2.25A2.25 2.25 0 0 0 0 3.25v9.5A2.25 2.25 0 0 0 2.25 15h11.5A2.25 2.25 0 0 0 16 12.75v-9.5Zm-1.5 9.5V11h-13v1.75c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75ZM1.5 6.5v3h13v-3h-13Zm13-1.5V3.25a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75V5h13Z" clip-rule="evenodd"/>
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
