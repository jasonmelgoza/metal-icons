import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-columns-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 3.75C2 2.784 2.784 2 3.75 2h5.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 9.25 22h-5.5A1.75 1.75 0 0 1 2 20.25V3.75Zm1.75-.25h5.5a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25V3.75a.25.25 0 0 1 .25-.25Zm9.25.25c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22h-5.5A1.75 1.75 0 0 1 13 20.25V3.75Zm1.75-.25h5.5a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25V3.75a.25.25 0 0 1 .25-.25Z" clip-rule="evenodd"/>
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
export class ColumnsIconComponent {}
