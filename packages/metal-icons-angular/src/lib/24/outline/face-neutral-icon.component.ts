import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-face-neutral-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" fill-rule="evenodd" d="M21.5 12a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0Zm1.5 0c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11Z" clip-rule="evenodd"/>
  <path fill="#000" d="M8.291 8.293A1.003 1.003 0 0 0 8.995 10h.01a.993.993 0 0 0 .704-.293A1.003 1.003 0 0 0 9.005 8h-.01a.993.993 0 0 0-.704.293Zm6 0A.993.993 0 0 1 14.995 8h.01c.264 0 .517.105.704.293A1.003 1.003 0 0 1 15.005 10h-.01a.993.993 0 0 1-.704-.293 1.003 1.003 0 0 1 0-1.414Zm.96 6.707a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5h6.501Z"/>
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
export class FaceNeutralIconComponent {}
