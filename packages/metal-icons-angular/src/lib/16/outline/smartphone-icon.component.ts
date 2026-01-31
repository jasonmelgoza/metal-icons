import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-smartphone-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.293 11.293A1 1 0 0 1 8 11h.007a1 1 0 0 1 0 2H8a1 1 0 0 1-.707-1.707Z"/>
  <path fill-rule="evenodd" d="M2.659.659A2.25 2.25 0 0 1 4.25 0h7.5A2.25 2.25 0 0 1 14 2.25v11.5A2.25 2.25 0 0 1 11.75 16h-7.5A2.25 2.25 0 0 1 2 13.75V2.25c0-.597.237-1.169.659-1.591Zm1.06 1.06a.75.75 0 0 0-.219.531v11.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V2.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.53.22Z" clip-rule="evenodd"/>
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
export class SmartphoneIconComponent {}
