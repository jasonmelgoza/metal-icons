import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-face-smile-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" clip-rule="evenodd"/>
  <path fill="#000" d="M8 12c-1.01 0-1.782-.504-2.267-.945a4.718 4.718 0 0 1-.564-.614 3.301 3.301 0 0 1-.212-.305.75.75 0 0 1 1.284-.775c.143.214.31.41.5.584.341.31.769.555 1.259.555.49 0 .918-.246 1.258-.555.19-.174.357-.37.5-.584a.75.75 0 1 1 1.285.775l-.212.305c-.128.167-.317.39-.564.614C9.782 11.495 9.01 12 8 12ZM5 6a1 1 0 0 1 1-1h.007a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm5-1a1 1 0 0 0 0 2h.007a1 1 0 1 0 0-2H10Z"/>
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
export class FaceSmileIconComponent {}
