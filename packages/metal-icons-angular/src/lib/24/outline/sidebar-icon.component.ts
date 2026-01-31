import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-sidebar-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" fill-rule="evenodd" d="M4.75 3A2.75 2.75 0 0 0 2 5.75v12.5A2.75 2.75 0 0 0 4.75 21h14.5A2.75 2.75 0 0 0 22 18.25V5.75A2.75 2.75 0 0 0 19.25 3H4.75ZM3.5 5.75c0-.69.56-1.25 1.25-1.25H8v15H4.75c-.69 0-1.25-.56-1.25-1.25V5.75Zm6 13.75h9.75c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H9.5v15Z" clip-rule="evenodd"/>
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
