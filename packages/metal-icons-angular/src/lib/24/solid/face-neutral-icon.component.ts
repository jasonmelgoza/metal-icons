import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-face-neutral-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM8.75 15a.75.75 0 0 0 0 1.5h6.501a.75.75 0 0 0 0-1.5H8.75Zm.245-7A.994.994 0 0 0 8 9a.994.994 0 0 0 .995 1h.01A.994.994 0 0 0 10 9a.994.994 0 0 0-.995-1h-.01Zm6 0A.994.994 0 0 0 14 9a.994.994 0 0 0 .995 1h.01A.994.994 0 0 0 16 9a.994.994 0 0 0-.995-1h-.01Z" clip-rule="evenodd"/>
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
