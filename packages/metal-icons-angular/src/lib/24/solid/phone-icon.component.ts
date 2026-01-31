import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-phone-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6.898 1a2.814 2.814 0 0 1 2.808 2.414v.007c.124.932.352 1.846.681 2.726a2.8 2.8 0 0 1-.633 2.961l-.003.003-.896.895a15.726 15.726 0 0 0 5.123 5.112l.9-.899a2.813 2.813 0 0 1 2.965-.632c.882.329 1.798.557 2.731.68h.007a2.813 2.813 0 0 1 2.418 2.85c-.011.451-.002 2.42 0 2.96v.104a2.802 2.802 0 0 1-1.91 2.671 2.824 2.824 0 0 1-1.154.137l-.013-.002a21.174 21.174 0 0 1-9.222-3.274c-2.765-1.79-4.607-3.62-6.406-6.393a21.082 21.082 0 0 1-3.281-9.248L1.01 4.06a2.803 2.803 0 0 1 1.665-2.82A2.81 2.81 0 0 1 3.81 1H6.9h-.002Z" clip-rule="evenodd"/>
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
export class PhoneIconComponent {}
