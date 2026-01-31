import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-pin-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.585 23.875 12 23.25l.415.625a.75.75 0 0 1-.83 0Z"/>
  <path fill-rule="evenodd" d="m12 23.25-.415.625-.009-.006-.023-.015-.093-.065c-.072-.05-.172-.119-.295-.208a31.981 31.981 0 0 1-4.333-3.777C4.49 17.344 2 13.837 2 9.954a9.932 9.932 0 0 1 2.93-7.04A10.023 10.023 0 0 1 12 0a10.023 10.023 0 0 1 7.07 2.914A9.931 9.931 0 0 1 22 9.954c0 3.883-2.49 7.39-4.832 9.85a31.98 31.98 0 0 1-4.333 3.777c-.1.073-.185.132-.251.178l-.054.038-.083.057-.023.015-.006.004-.002.001s-.001.001-.416-.624ZM9.172 7.172a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656Z" clip-rule="evenodd"/>
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
export class PinIconComponent {}
