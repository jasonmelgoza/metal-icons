import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-face-sad-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
  <path fill="#000" fill-rule="evenodd" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" clip-rule="evenodd"/>
  <path fill="#000" d="M5 6a1 1 0 0 1 1-1h.007a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm5-1a1 1 0 0 0 0 2h.007a1 1 0 1 0 0-2H10ZM5.733 9.943c.485-.44 1.257-.945 2.267-.945s1.782.505 2.267.945c.247.224.436.447.564.614l.212.305a.75.75 0 1 1-1.285.775 3.211 3.211 0 0 0-.5-.584c-.34-.309-.768-.555-1.258-.555s-.918.245-1.259.555c-.19.174-.357.37-.5.584a.75.75 0 0 1-1.284-.775c.065-.105.136-.207.212-.305.17-.22.358-.426.564-.614Z"/>
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
export class FaceSadIconComponent {}
