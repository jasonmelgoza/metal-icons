<p align="center">
  <a href="https://metalicons.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jasonmelgoza/metal-icons/HEAD/.github/hero-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/jasonmelgoza/metal-icons/HEAD/.github/hero-light.svg">
      <img alt="Metal Icons Banner" width="830" height="200" style="max-width: 100%" src="https://raw.githubusercontent.com/jasonmelgoza/metal-icons/HEAD/.github/hero-light.svg">
    </picture>
  </a>
</p>

<h3 align="center">Metal Icons</h3>

<p align="center">
  A versatile collection of icons designed for your next Figma or React project.
</p>

## Goals

- Design an icon set with two base sizes: 16px and 24px, providing an outline and a solid version of each.
- Provide an optimized set of SVG icons.
- Craft a user-friendly and intuitive Figma component library.
- Build an easy-to-use JavaScript icon library for React projects.

## Getting Started

### React

First, install `metal-icons` in your project using your preferred JS package manager. 

```bash
yarn add metal-icons
```

Then, import an icon from the `metal-icons` library at the beginning of a component and then utilize it in the render function.

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

The 16px outline icons can be imported from `metal-icons/16/outline`, and the solid ones can be imported from `metal-icons/16/solid`. Similarly, the 24px outline icons can be imported from `metal-icons/24/outline`, and the solid variant can be imported from `metal-icons/24/solid`.


### Figma

The Figma Metal-Icons component library is ready to be imported, with both sizes and variants readily available.

[Open in Figma](https://www.figma.com/community/file/1275692756020345515/Metal-Icons)

## Inspiration

- [Feather](https://feathericons.com/) by [Cole Bemis](https://github.com/colebemis)
- [Heroicons](https://heroicons.com/) by [Tailwind Labs](https://github.com/tailwindlabs)
- [Material Icons](https://fonts.google.com/icons) by [Google Design](https://design.google/)

## License

Licensed under the MIT License. Copyright © 2023-present Jason Melgoza.

See [LICENSE](./LICENSE) for more information.
