import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-grid-plus-16-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.25 15C1.56 15 1 14.44 1 13.75v-3.5C1 9.56 1.56 9 2.25 9h3.5C6.44 9 7 9.56 7 10.25v3.5C7 14.44 6.44 15 5.75 15h-3.5Zm8 0C9.56 15 9 14.44 9 13.75v-3.5C9 9.56 9.56 9 10.25 9h3.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5Zm-8-8C1.56 7 1 6.44 1 5.75v-3.5C1 1.56 1.56 1 2.25 1h3.5C6.44 1 7 1.56 7 2.25v3.5C7 6.44 6.44 7 5.75 7h-3.5Z" clip-rule="evenodd"/>
  <path d="M12.75 6.25a.75.75 0 1 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 1 1 1.5 0v1.5h1.5a.75.75 0 1 1 0 1.5h-1.5v1.5Z"/>
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
export class GridPlusIconComponent {}
