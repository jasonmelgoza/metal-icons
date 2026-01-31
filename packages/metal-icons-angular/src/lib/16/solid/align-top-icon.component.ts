import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-align-top-16-solid',
  standalone: true,
  template: `
    <svg  xmlns="http://www.w3.org/2000/svg">
  <path d="M7.75 15a.75.75 0 0 1-.75-.75V6.636L4.045 9.765a.75.75 0 0 1-1.09-1.03l4.25-4.5A.747.747 0 0 1 7.738 4h.024c.19.003.373.078.51.211l.004.005a.857.857 0 0 1 .02.02l4.25 4.499a.751.751 0 0 1-1.091 1.03L8.5 6.636v7.614a.75.75 0 0 1-.75.75ZM13 2.5A.75.75 0 1 0 13 1H2.5a.75.75 0 0 0 0 1.5H13Z" fill="#000"/>
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
export class AlignTopIconComponent {}
