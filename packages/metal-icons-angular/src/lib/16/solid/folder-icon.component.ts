import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-folder-16-solid',
  standalone: true,
  template: `
    <svg viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
<path d="M0.65901 1.65901C1.08097 1.23705 1.65326 1 2.25 1H6.629C6.92455 1.00013 7.21717 1.05848 7.49016 1.17173C7.76314 1.28497 8.01115 1.45089 8.22 1.66L9.341 2.78C9.48152 2.92069 9.67216 2.99983 9.871 3H13.75C14.3467 3 14.919 3.23705 15.341 3.65901C15.7629 4.08097 16 4.65326 16 5.25V5.5H0V3.25C0 2.65326 0.237053 2.08097 0.65901 1.65901Z" fill="currentColor"/>
<path d="M0 7V12.75C0 13.3467 0.237053 13.919 0.65901 14.341C1.08097 14.7629 1.65326 15 2.25 15H13.75C14.3467 15 14.919 14.7629 15.341 14.341C15.7629 13.919 16 13.3467 16 12.75V7H0Z" fill="currentColor"/>
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
export class FolderIconComponent {}
