import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-columns-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 2.75C1 1.783 1.784 1 2.75 1h2.5C6.216 1 7 1.784 7 2.75v10.5A1.75 1.75 0 0 1 5.25 15h-2.5A1.75 1.75 0 0 1 1 13.25V2.75Zm1.75-.25h2.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25V2.75a.25.25 0 0 1 .25-.25ZM9 2.75C9 1.783 9.784 1 10.75 1h2.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15h-2.5A1.75 1.75 0 0 1 9 13.25V2.75Zm1.75-.25h2.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25V2.75a.25.25 0 0 1 .25-.25Z" clip-rule="evenodd"/>
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
