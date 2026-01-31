import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-upload-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M6.232 8.793a.75.75 0 0 0 1.06-.025l3.958-4.146V15.25a.75.75 0 1 0 1.5 0V4.622l3.957 4.146a.75.75 0 1 0 1.085-1.036l-5.25-5.5a.747.747 0 0 0-1.086.001l-5.249 5.5a.75.75 0 0 0 .025 1.06Z"/>
  <path d="M2.75 14a.75.75 0 0 1 .75.75v4.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25v-4.5a.75.75 0 0 1 1.5 0v4.5A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25v-4.5a.75.75 0 0 1 .75-.75Z"/>
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
export class UploadIconComponent {}
