import { Component } from '@angular/core';

@Component({
  selector: 'metal-icon-book-open-24-solid',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path fill="#000" d="M11.25 3.938a4.18 4.18 0 0 0-.783-.501c-.487-.24-1.016-.341-1.63-.39C8.236 3 7.494 3 6.564 3H3.75A2.75 2.75 0 0 0 1 5.75v9.2a2.75 2.75 0 0 0 2.75 2.75h3.046c1.115 0 1.523.007 1.88.112.338.1.92.475.92.475s.513.543 1.132 1.44l.522.757V3.938Zm1.5 16.546.522-.757c.62-.897 1.132-1.44 1.132-1.44s.582-.375.92-.474c.357-.106.764-.113 1.88-.113h3.046A2.75 2.75 0 0 0 23 14.95v-9.2A2.75 2.75 0 0 0 20.25 3h-2.815c-.93 0-1.672 0-2.271.047-.615.049-1.144.15-1.631.39-.28.138-.543.306-.783.5v16.547Z"/>
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
export class BookOpenIconComponent {}
