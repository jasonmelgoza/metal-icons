import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-layers-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.658 1.082a.75.75 0 0 1 .684 0l10.25 5.25a.75.75 0 0 1 0 1.336l-10.25 5.25a.749.749 0 0 1-.684 0l-10.25-5.25a.75.75 0 0 1 0-1.336l10.25-5.25Z" clip-rule="evenodd"/>
  <path d="M1.089 16.395a.75.75 0 0 1 1.016-.306L12 21.399l9.895-5.31a.75.75 0 0 1 .71 1.322l-10.25 5.5a.75.75 0 0 1-.71 0l-10.25-5.5a.75.75 0 0 1-.306-1.016Z"/>
  <path d="M1.534 11.032a.75.75 0 0 1 .571.057L12 16.399l9.895-5.31a.75.75 0 0 1 .71 1.322l-10.25 5.5a.75.75 0 0 1-.71 0l-10.25-5.5a.75.75 0 0 1 .139-1.38Z"/>
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
export class LayersIconComponent {}
