# Commit Message Conventions (Monorepo)

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to automate changelog generation and version bumping for the entire monorepo.

## Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

## Types

| Type | Description | Changelog Section | Version Bump |
|------|-------------|-------------------|--------------|
| `feat` | New feature | **Added** | Minor (0.X.0) |
| `fix` | Bug fix | **Fixed** | Patch (0.0.X) |
| `chore` | Maintenance tasks | **Changed** | Patch (0.0.X) |
| `docs` | Documentation only | **Documentation** | Patch (0.0.X) |
| `style` | Code style changes | **Changed** | Patch (0.0.X) |
| `refactor` | Code refactoring | **Changed** | Patch (0.0.X) |
| `perf` | Performance improvements | **Changed** | Patch (0.0.X) |
| `build` | Build system changes | **Changed** | Patch (0.0.X) |
| `test` | Test changes | Hidden | None |
| `ci` | CI/CD changes | Hidden | None |

## Scopes (Optional but Recommended)

Use scopes to clarify which part of the monorepo changed:

| Scope | Description | Example |
|-------|-------------|---------|
| `icons` | Icon SVG files, definitions | `feat(icons): add zoom icons` |
| `website` | Website package | `fix(website): resolve layout bug` |
| `build` | Build scripts, tooling | `chore(build): update SVGO config` |
| `deps` | Dependencies | `chore(deps): update React to v18.3` |
| *(none)* | Multiple areas or general | `feat: enhance search functionality` |

## Breaking Changes

Add `BREAKING CHANGE:` in the footer or use `!` after type:

```
feat!: redesign icon component API

BREAKING CHANGE: Icon components now require size prop
```

This will trigger a **major** version bump (X.0.0).

## Examples

### Adding Icons

```bash
# Single icon
feat(icons): add zoom-out icon

# Multiple icons
feat(icons): add align-left and align-right icons

# With PR reference
feat(icons): add sidebar icons (#76)
```

### Website Changes

```bash
# New feature
feat(website): add toast notifications for copy feedback

Implemented ToastProvider component for better notification
management when users copy icons to clipboard.

# Bug fix
fix(website): resolve responsive layout issue on mobile

# UI improvement
feat(website): display icon count in search input (#79)
```

### Build & Tooling

```bash
# Configuration changes
chore(build): update SVGO configuration for better optimization

# Script improvements
feat(build): add icon validation script

# Dependency updates
chore(deps): update Vite to v7.1.9
```

### Documentation

```bash
# README updates
docs: update installation instructions

# New documentation
docs: add contributing guidelines

# Fix typos
docs(readme): fix typo in usage example
```

### Cross-Package Changes

```bash
# When changes affect multiple areas
feat: enhance search functionality across website and icons

- Add search filtering to icon list
- Display match count in search input
- Improve search performance

# When unsure about scope
chore: update project dependencies
```

## Tips

1. **Use lowercase** for type and subject
2. **No period** at the end of subject line
3. **Imperative mood** in subject (use "add" not "added")
4. **Reference PRs** in the subject: `feat: add new icons (#123)`
5. **Limit subject to 72 characters**
6. **Use scopes** when changes are specific to one area
7. **Skip scope** when changes affect multiple areas

## Real-World Examples from Your Project

### Recent commits reformatted:

❌ **Before:**
```
Enhance SearchInput component
PR: #78
```

✅ **After:**
```
feat(website): enhance SearchInput component (#78)
```

---

❌ **Before:**
```
Add align-left and align-right icons
PR: #80
```

✅ **After:**
```
feat(icons): add align-left and align-right icons (#80)
```

---

❌ **Before:**
```
Update icon ID for 'book-open' in icons.json
PR: #75
```

✅ **After:**
```
fix(icons): correct book-open icon ID (#75)
```

---

❌ **Before:**
```
Update Vite from v6.3.5 to v7.1.9
```

✅ **After:**
```
chore(deps): update Vite to v7.1.9

Also updates related plugins for security
and performance improvements.
```

## Automation Flow

When you push commits to `main` following these conventions:

1. **release-please bot** analyzes your commits
2. Opens a **Release PR** with:
   - Updated `CHANGELOG.md` at the root
   - All changes properly categorized
   - Scopes shown in the changelog (e.g., "**website**: Add toast notifications")
3. When you merge the Release PR:
   - Creates a **GitHub Release**
   - Creates a **git tag** (v0.2.15)
   - Changelog stays up to date automatically

## Expected Changelog Output

```markdown
## [v0.2.15] - 2026-01-10

### Added

- **icons**: Add zoom-in and zoom-out icons (#82)
- **website**: Add toast notifications for copy feedback (#66)
- **website**: Display icon count in search input (#79)

### Fixed

- **icons**: Correct book-open icon ID (#75)
- **website**: Resolve responsive layout issue on mobile (#83)

### Changed

- **build**: Update SVGO configuration for better optimization
- **deps**: Update Vite to v7.1.9
- Update installation instructions (#84)
```

## Quick Reference

```bash
# Icons
git commit -m "feat(icons): add new icons"
git commit -m "fix(icons): correct icon rendering"

# Website  
git commit -m "feat(website): add new feature"
git commit -m "fix(website): resolve bug"

# Build/Tools
git commit -m "chore(build): update configuration"
git commit -m "feat(build): add new script"

# Dependencies
git commit -m "chore(deps): update packages"

# Documentation
git commit -m "docs: improve README"

# Multiple areas
git commit -m "feat: enhance overall project"

# Breaking changes
git commit -m "feat(icons)!: redesign icon API"
```

## Using with Pull Requests

**Best Practice:** Format your PR title as a conventional commit

When you "Squash and merge", GitHub uses the PR title as the commit message:

1. Create PR with title: `feat(website): add icon count display`
2. GitHub creates commit: `feat(website): add icon count display (#79)`
3. release-please picks it up automatically!

This way, you don't need to worry about individual commit messages in your PR—just make sure the PR title follows the convention.
