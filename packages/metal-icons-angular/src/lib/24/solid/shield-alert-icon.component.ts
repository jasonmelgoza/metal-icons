import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-shield-alert-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.96 1.307a2.75 2.75 0 0 0-1.92 0l-6.25 2.33A2.75 2.75 0 0 0 3 6.214V12c0 2.732 1.463 5.038 3.103 6.774 1.65 1.744 3.563 2.999 4.65 3.642a2.437 2.437 0 0 0 2.493 0c1.088-.642 3-1.898 4.65-3.642C19.538 17.038 21 14.732 21 12V6.214a2.75 2.75 0 0 0-1.79-2.577l-6.25-2.33Zm-.43 5.913a.75.75 0 0 0-1.28.53v4.5a.75.75 0 1 0 1.5 0v-4.5a.75.75 0 0 0-.22-.53Zm-1.237 8.073A1 1 0 0 1 12 15h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-.707-1.707Z" clip-rule="evenodd"/>
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
export class ShieldAlertIconComponent {}
