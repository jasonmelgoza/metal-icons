import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-shield-x-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.74.213a2.25 2.25 0 0 0-1.48 0L2.51 1.866A2.25 2.25 0 0 0 1 3.991v4.01c0 2.05 1.18 3.747 2.451 4.991 1.281 1.256 2.756 2.151 3.572 2.598a2.024 2.024 0 0 0 1.954 0c.816-.448 2.291-1.343 3.573-2.598C13.819 11.748 15 10.05 15 8.002v-4.01a2.25 2.25 0 0 0-1.51-2.126L8.74.213ZM11 5.25a.75.75 0 0 0-1.28-.53L8 6.44 6.28 4.72a.75.75 0 0 0-1.06 1.06L6.94 7.5 5.22 9.22a.75.75 0 1 0 1.06 1.06L8 8.56l1.72 1.72a.75.75 0 1 0 1.06-1.06L9.06 7.5l1.72-1.72a.75.75 0 0 0 .22-.53Z" clip-rule="evenodd"/>
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
export class ShieldXIconComponent {}
