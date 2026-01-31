import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-trash-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2.25V3H1.75a.75.75 0 0 0 0 1.5H2v9.25A2.25 2.25 0 0 0 4.25 16h7.5A2.25 2.25 0 0 0 14 13.75V4.5h.25a.75.75 0 1 0 0-1.5H12v-.75A2.25 2.25 0 0 0 9.75 0h-3.5A2.25 2.25 0 0 0 4 2.25Zm1.72-.53a.75.75 0 0 0-.22.53V3h5v-.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.53.22Zm1.06 4.5a.75.75 0 0 0-1.28.53v5.5a.75.75 0 1 0 1.5 0v-5.5a.75.75 0 0 0-.22-.53Zm3.5 0c.141.14.22.331.22.53v5.5a.75.75 0 1 1-1.5 0v-5.5a.75.75 0 0 1 1.28-.53Z" clip-rule="evenodd"/>
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
export class TrashIconComponent {}
