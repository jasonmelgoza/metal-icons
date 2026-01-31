import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-annotation-24-solid',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 3C21.7688 3 23 4.23122 23 5.75V15.25C23 16.7688 21.7688 18 20.25 18H15.7499L12.9198 21.5189C12.4717 22.1552 11.5283 22.1552 11.0802 21.5189L8.24999 18H4.375C2.51104 18 1 16.489 1 14.625V5.75C1 4.23122 2.23122 3 3.75 3H20.25Z" fill="currentColor"/>
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
export class AnnotationIconComponent {}
