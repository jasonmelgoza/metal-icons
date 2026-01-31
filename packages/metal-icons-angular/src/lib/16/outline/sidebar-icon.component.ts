import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-sidebar-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M3.25 2A2.25 2.25 0 0 0 1 4.25v7.5A2.25 2.25 0 0 0 3.25 14h9.5A2.25 2.25 0 0 0 15 11.75v-7.5A2.25 2.25 0 0 0 12.75 2h-9.5ZM2.5 4.25a.75.75 0 0 1 .75-.75h1.8v9h-1.8a.75.75 0 0 1-.75-.75v-7.5Zm3.95 8.25h6.3a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-6.3v9Z" clip-rule="evenodd"/>
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
