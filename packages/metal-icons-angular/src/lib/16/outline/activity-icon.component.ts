import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-activity-16-outline',
  standalone: true,
  template: `
    <svg  xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.016 1a.75.75 0 0 1 .698.521l3.306 10.33 1.47-4.341A.75.75 0 0 1 12.2 7H15a.75.75 0 1 1 0 1.5h-2.262l-2.028 5.99a.75.75 0 0 1-1.424-.011L5.952 4.06 4.504 8.008A.75.75 0 0 1 3.8 8.5H1A.75.75 0 0 1 1 7h2.276l2.02-5.508A.75.75 0 0 1 6.016 1Z" fill="#000"/>
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
export class ActivityIconComponent {}
