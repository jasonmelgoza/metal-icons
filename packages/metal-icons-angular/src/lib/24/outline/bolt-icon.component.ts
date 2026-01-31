import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-bolt-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" fill-rule="evenodd" d="M13.333 1.065a.75.75 0 0 1 .437.791l-.918 6.409 8.48.94a.75.75 0 0 1 .494 1.226l-10.278 12.3a.75.75 0 0 1-1.318-.587l.918-6.409-8.48-.94a.75.75 0 0 1-.494-1.226l10.278-12.3a.75.75 0 0 1 .881-.204ZM4.222 13.458l7.86.872a.75.75 0 0 1 .66.851l-.653 4.563 7.69-9.202-7.862-.872a.75.75 0 0 1-.66-.851l.654-4.563-7.69 9.203Z" clip-rule="evenodd"/>
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
export class BoltIconComponent {}
