# Metal Icons Angular

A clean, reliable icon set built for Angular.

**169 icons** available in multiple sizes and styles.

---

## Available Sizes & Styles

Metal Icons come in different sizes to fit your design needs:

- **16px** - Perfect for inline text and compact UIs
- **24px** - Ideal for buttons and larger touch targets

Each size is available in:
- **Solid** - Filled icons for primary actions
- **Outline** - Stroke-based icons for secondary actions

---

## Installation

Install `metal-icons-angular` using your preferred package manager:

```bash
npm install metal-icons-angular
```

or

```bash
yarn add metal-icons-angular
```

---

## Basic Usage

All icons are available as individual Angular components.

Import each icon individually as an Angular component:

```typescript
import { Component } from '@angular/core';
import { FolderIconComponent } from 'metal-icons-angular/16/solid';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [FolderIconComponent],
  template: `
    <button>
      <metal-icon-folder-16-solid />
      Add Folder
    </button>
  `
})
export class MyComponent {}
```

Icons follow an `UpperCamelCase` naming convention and always end with the word "IconComponent."

### Component Selectors

Each icon has a unique selector following the pattern `metal-icon-{icon-name}-{size}-{style}`:

- `<metal-icon-folder-16-solid />`
- `<metal-icon-folder-16-outline />`
- `<metal-icon-folder-24-solid />`
- `<metal-icon-folder-24-outline />`

---

## Styling

Icons inherit their color from the current text color and can be styled with CSS:

```typescript
@Component({
  template: `
    <metal-icon-folder-16-solid style="color: blue; width: 20px; height: 20px;" />
  `
})
```

By default, icons are sized to `1em` to match your text size. You can customize the size using CSS:

```css
metal-icon-folder-16-solid {
  width: 24px;
  height: 24px;
  color: #3b82f6;
}
```

---

## Import Paths

Metal Icons Angular uses Angular's secondary entry points for optimal tree-shaking:

```typescript
// 16px solid icons
import { FolderIconComponent } from 'metal-icons-angular/16/solid';

// 16px outline icons
import { FolderIconComponent } from 'metal-icons-angular/16/outline';

// 24px solid icons
import { FolderIconComponent } from 'metal-icons-angular/24/solid';

// 24px outline icons
import { FolderIconComponent } from 'metal-icons-angular/24/outline';
```

---

## Icon Count

169 icons

---

## License

Licensed under the MIT License, Copyright © 2023-present Jason Melgoza.

See [LICENSE](./LICENSE) for more information.
