import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-circle-add-24-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" clip-rule="evenodd"/>
  <path d="M12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 1 1 0 1.5h-3.5v3.5a.75.75 0 1 1-1.5 0v-3.5h-3.5a.75.75 0 1 1 0-1.5h3.5v-3.5A.75.75 0 0 1 12 7Z"/>
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
export class CircleAddIconComponent {}
