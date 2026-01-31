import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-repeat-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M17.515.455a.75.75 0 0 0-1.03 1.09L19.614 4.5H6.75A4.75 4.75 0 0 0 2 9.25v2a.75.75 0 1 0 1.5 0v-2A3.25 3.25 0 0 1 6.75 6h12.864l-3.129 2.955a.75.75 0 0 0 1.03 1.09l4.5-4.25a.751.751 0 0 0 0-1.09l-4.5-4.25Zm-9.47 13.53a.75.75 0 0 1-.03 1.06L4.886 18H17.25a3.25 3.25 0 0 0 3.25-3.25v-2a.75.75 0 1 1 1.5 0v2a4.75 4.75 0 0 1-4.75 4.75H4.886l3.129 2.955a.75.75 0 0 1-1.03 1.09l-4.5-4.25a.75.75 0 0 1 0-1.09l4.5-4.25a.75.75 0 0 1 1.06.03Z"/>
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
export class RepeatIconComponent {}
