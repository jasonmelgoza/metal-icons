import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-alarm-24-solid',
  standalone: true,
  template: `
    <svg  xmlns="http://www.w3.org/2000/svg">
  <path d="M2.907 7.75a10.5 10.5 0 0 1 4.822-4.342l-.61-1.37A12 12 0 0 0 1.608 7l1.299.75ZM21.093 7.75a10.5 10.5 0 0 0-4.822-4.342l.61-1.37A12 12 0 0 1 22.392 7l-1.299.75Z" fill="#000"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-.25 4a.75.75 0 0 1 .75.75v4.822l5.131 3.032a.75.75 0 1 1-.762 1.292L11 13.428V7.75a.75.75 0 0 1 .75-.75Z" fill="#000"/>
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
export class AlarmIconComponent {}
