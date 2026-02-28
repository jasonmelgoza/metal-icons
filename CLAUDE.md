# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

Metal Icons is a yarn-workspaces monorepo that publishes a React icon library (`metal-icons` on npm) and hosts the browsing website at metal-icons.com. Icons live as SVG source files; a build pipeline optimizes them with SVGO and transforms them into React components via SVGR.

## Commands

All commands run from the repo root using yarn.

```bash
# Build the metal-icons package (required before running the website locally)
yarn build

# Run the website dev server
yarn dev

# Lint (verifies every icon exists in all 4 size/style combinations)
yarn lint

# Sync website data files after adding/changing icons
yarn sync-website

# Website-specific commands (run from repo root)
yarn workspace website build   # TypeScript + Vite production build
yarn workspace website lint    # ESLint
yarn workspace website preview # Preview production build
```

> **Note:** `yarn build` must be run before `yarn dev` on a fresh clone, or any time icon SVGs change. The website imports from the built `packages/metal-icons/` output, not from source.

## Architecture

### Icon pipeline

```
src/{16,24}/{solid,outline}/*.svg   ← source SVGs (checked in)
       ↓  yarn build
optimized/{16,24}/{solid,outline}/  ← SVGO-optimized (gitignored)
       ↓  scripts/build.js
packages/metal-icons/{16,24}/{solid,outline}/   ← CJS + ESM React components
```

`scripts/build.js` is the core transform: it reads optimized SVGs, runs them through SVGR to produce React components, then Babel to output both CJS and ESM formats. It also rewrites `packages/metal-icons/package.json`'s `exports` map on every build.

### Adding a new icon

1. Drop SVG files into `src/16/solid/`, `src/16/outline/`, `src/24/solid/`, `src/24/outline/` (all four required — `yarn lint` enforces this).
2. Run `yarn build` to generate React components.
3. Run `yarn sync-website` to update `packages/website/public/data/icons.json` and `packages/website/src/data/version.json`.
4. On PRs that touch `src/**/*.svg`, the `Build Icons` GitHub Actions workflow does steps 2–3 automatically and commits the website data files.

### Website (`packages/website`)

Vite + React 18 + TypeScript. Key files:

- `src/pages/Home.tsx` — icon browser: search, size/variant toggles, copy-to-clipboard
- `src/components/Hero.tsx` — animated icon grid on the homepage
- `src/components/Icon.tsx` — renders a single icon from the JSON data
- `src/components/ToastProvider.tsx` — wraps [sonner](https://sonner.emilkowal.ski/) for copy feedback

The website references `metal-icons` as a workspace dependency pinned to the current version. Because of this, the package must be built locally before the dev server will start.

## Commit Conventions

This project uses Conventional Commits. The PR title is used as the squash-merge commit message, so format it accordingly.

```
feat(icons): add zoom-out icon
fix(website): resolve layout bug on mobile
chore(deps): update Vite to v7.x
refactor(website): extract magic numbers in Hero
```

Scopes: `icons`, `website`, `build`, `deps`. Omit scope when changes touch multiple areas. Breaking changes use `!` or a `BREAKING CHANGE:` footer and trigger a major version bump via release-please.
