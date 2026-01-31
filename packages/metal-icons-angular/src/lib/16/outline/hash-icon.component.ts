import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-hash-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.884 1.762a.75.75 0 0 1 .604.872L7.058 5h2.975l.479-2.634a.75.75 0 1 1 1.476.268L11.558 5h1.192a.75.75 0 1 1 0 1.5h-1.465l-.546 3h2.011a.75.75 0 1 1 0 1.5h-2.283l-.48 2.634a.75.75 0 1 1-1.475-.268L8.942 11H5.967l-.48 2.634a.75.75 0 1 1-1.475-.268L4.442 11H3.25a.75.75 0 0 1 0-1.5h1.465l.545-3H3.25a.75.75 0 0 1 0-1.5h2.283l.479-2.634a.75.75 0 0 1 .872-.604ZM9.214 9.5l.546-3H6.785l-.546 3h2.976-.001Z" clip-rule="evenodd"/>
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
export class HashIconComponent {}
