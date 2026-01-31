import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-sparkle-text-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" d="M1.75 1a.75.75 0 0 0 0 1.5h12.5a.75.75 0 1 0 0-1.5H1.75Zm0 4a.75.75 0 0 0 0 1.5h12.5a.75.75 0 1 0 0-1.5H1.75ZM1 9.75A.75.75 0 0 1 1.75 9h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 1 9.75ZM1.75 13a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5h-4.5ZM11.5 8a.75.75 0 0 1 .713.516l.563 1.712 1.707.56a.75.75 0 0 1 .001 1.425l-1.712.563-.56 1.707a.75.75 0 0 1-1.425.001l-.563-1.712-1.707-.56a.75.75 0 0 1-.001-1.425l1.712-.563.56-1.707A.75.75 0 0 1 11.498 8Z"/>
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
export class SparkleTextIconComponent {}
