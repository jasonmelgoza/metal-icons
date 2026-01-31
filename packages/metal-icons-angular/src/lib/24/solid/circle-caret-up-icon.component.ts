import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-caret-up-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM12.574 8.291c-.258-.388-.888-.388-1.146 0L8.095 13.1c-.265.397.056.901.573.901h6.664c.517 0 .838-.504.573-.901l-3.33-4.808Z" clip-rule="evenodd"/>
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
export class CircleCaretUpIconComponent {}
