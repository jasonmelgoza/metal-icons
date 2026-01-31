import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-sidebar-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M5 14H3.25A2.25 2.25 0 0 1 1 11.75v-7.5A2.25 2.25 0 0 1 3.25 2H5v12Zm7.75-12A2.25 2.25 0 0 1 15 4.25v7.5A2.25 2.25 0 0 1 12.75 14H6.5V2h6.25Z"/>
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
export class SidebarIconComponent {}
