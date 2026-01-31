import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-at-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M9.818.21a8 8 0 1 0 3.046 14.141.75.75 0 1 0-.912-1.19A6.5 6.5 0 1 1 14.5 8v1c0 .908-.54 1.5-1.25 1.5-.4 0-.691-.157-.894-.399C12.142 9.847 12 9.463 12 9V4.75a.75.75 0 1 0-1.5 0v.127a4 4 0 1 0 .449 5.825c.076.128.162.25.258.364.484.577 1.194.934 2.043.934C15.04 12 16 10.461 16 9V8A8 8 0 0 0 9.818.21ZM10.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" clip-rule="evenodd"/>
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
export class AtIconComponent {}
