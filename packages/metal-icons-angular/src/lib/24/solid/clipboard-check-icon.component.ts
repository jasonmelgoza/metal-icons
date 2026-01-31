import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-clipboard-check-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7.513 1.513A1.75 1.75 0 0 1 8.75 1h6.5A1.75 1.75 0 0 1 17 2.75V3h1.25A2.75 2.75 0 0 1 21 5.75v14.5A2.75 2.75 0 0 1 18.25 23H5.75A2.75 2.75 0 0 1 3 20.25V5.75A2.75 2.75 0 0 1 5.75 3H7v-.25c0-.464.184-.91.513-1.237Zm1.06 1.06a.25.25 0 0 0-.073.177v1.5a.25.25 0 0 0 .25.25h6.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.177.073Zm8.188 7.146a.75.75 0 0 0-1.06 0l-5.47 5.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06Z" clip-rule="evenodd"/>
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
export class ClipboardCheckIconComponent {}
