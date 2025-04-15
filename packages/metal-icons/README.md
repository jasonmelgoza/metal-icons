# Metal Icons

A flexible set of icons built for React.

---

## Basic Usage

All icons are available as individual React components.

First, install `metal-icons` from npm:

```bash
yarn add metal-icons
```

Now, you can import each icon individually as a React component:

```javascript
import { FolderIcon } from "metal-icons/16/solid"

export default function MyComponent() {
  return (
    <button>
      <FolderIcon />
      Add Folder
    </button>
  )
}
```

Icons follow an `UpperCamelCase` naming convention and always end with the word "Icon."

## License

Licensed under the MIT License, Copyright © 2023-present Jason Melgoza.
