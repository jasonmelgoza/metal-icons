import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-sidebar-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M8 21H4.75A2.75 2.75 0 0 1 2 18.25V5.75A2.75 2.75 0 0 1 4.75 3H8v18ZM19.25 3A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H9.5V3h9.75Z"/>
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
