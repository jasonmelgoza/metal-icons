import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-more-alt-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
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
export class MoreAltIconComponent {}
