import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-floppy-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 25">
  <path fill-rule="evenodd" d="M2.805 3.305A2.75 2.75 0 0 1 4.75 2.5h10.172c.73 0 1.428.29 1.944.805l4.329 4.329c.515.516.805 1.215.805 1.944V19.75a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 19.75V5.25c0-.73.29-1.429.805-1.945ZM17 21H7v-6.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V21ZM14 4H6v4a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 14 8V4Z" clip-rule="evenodd"/>
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
export class FloppyIconComponent {}
