import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-arrow-left-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.755 4.695a.75.75 0 0 1 .05 1.06L6.445 7.25h4.805a.75.75 0 1 1 0 1.5H6.445l1.36 1.495a.75.75 0 0 1-1.11 1.01l-2.499-2.75A.747.747 0 0 1 4 8.003v-.004c0-.195.075-.372.197-.505l2.498-2.748a.75.75 0 0 1 1.06-.051Z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z" clip-rule="evenodd"/>
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
export class CircleArrowLeftIconComponent {}
