import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-pencil-line-16-outline',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path fill-rule="evenodd" d="M11.505.745a2.543 2.543 0 0 1 3.596 0l.154.154a2.543 2.543 0 0 1 0 3.596L4.867 14.884a.75.75 0 0 1-.349.197l-3.586.897a.75.75 0 0 1-.91-.91l.897-3.586a.75.75 0 0 1 .197-.349l8.966-8.965v-.001L11.506.745Zm-.892 3.013-8.29 8.289-.542 2.172 2.172-.543 8.29-8.289-1.63-1.63Zm1.959-1.96a1.03 1.03 0 0 1 1.456 0l.17.17a1.03 1.03 0 0 1 0 1.457l-.898.898-1.626-1.627.898-.898Z" clip-rule="evenodd"/>
  <path d="M8.75 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"/>
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
export class PencilLineIconComponent {}
