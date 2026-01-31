import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-alert-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11 17a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1Zm1.75-8.25a.75.75 0 1 0-1.5 0v4.5a.75.75 0 1 0 1.5 0v-4.5Z"/>
  <path fill-rule="evenodd" d="M10.658 2.366a2.651 2.651 0 0 1 2.684 0c.407.239.745.581.984.99l.002.004 8.315 14.46a2.86 2.86 0 0 1 .008 2.758 2.75 2.75 0 0 1-.976 1.03c-.41.25-.877.386-1.357.392H3.682a2.653 2.653 0 0 1-1.357-.393 2.757 2.757 0 0 1-.975-1.029 2.86 2.86 0 0 1 .007-2.758l.006-.01 8.31-14.45.001-.004c.237-.41.576-.75.984-.99Zm.313 1.744L2.665 18.552a1.36 1.36 0 0 0 0 1.306c.108.198.262.36.443.47.18.11.382.169.586.172h16.61c.204-.003.406-.061.586-.172.181-.11.335-.272.444-.47a1.36 1.36 0 0 0-.001-1.306L13.03 4.112l-.001-.002a1.25 1.25 0 0 0-.446-.45 1.15 1.15 0 0 0-1.166 0 1.25 1.25 0 0 0-.446.45Z" clip-rule="evenodd"/>
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
export class AlertIconComponent {}
