import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-archive-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="M6.75 8a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"/>
  <path fill-rule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582v6.918A2.25 2.25 0 0 1 12.75 15h-9.5A2.25 2.25 0 0 1 1 12.75V5.832A1.75 1.75 0 0 1 0 4.25v-1.5Zm13.5 10V6h-11v6.75c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75Zm1-8.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v1.5Z" clip-rule="evenodd"/>
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
export class ArchiveIconComponent {}
