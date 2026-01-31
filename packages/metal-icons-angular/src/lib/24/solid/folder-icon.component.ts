import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-folder-24-solid',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M1.80546 2.80546C2.32118 2.28973 3.02065 2 3.75 2H9.422C10.1511 2.00002 10.8503 2.28958 11.366 2.805L12.195 3.634C12.4292 3.86816 12.7468 3.9998 13.078 4H20.25C20.9793 4 21.6788 4.28973 22.1945 4.80546C22.7103 5.32118 23 6.02065 23 6.75V7H1V4.75C1 4.02065 1.28973 3.32118 1.80546 2.80546Z" fill="currentColor"/>
<path d="M1 8.5V19.25C1 19.9793 1.28973 20.6788 1.80546 21.1945C2.32118 21.7103 3.02065 22 3.75 22H20.25C20.9793 22 21.6788 21.7103 22.1945 21.1945C22.7103 20.6788 23 19.9793 23 19.25V8.5H1Z" fill="currentColor"/>
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
