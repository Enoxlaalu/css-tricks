# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start Vite dev server with HMR
npm run build      # production build
npm run lint       # ESLint (flat config, eslint.config.js)
npm run preview    # preview production build
```

No test runner is configured.

## Architecture

**Purpose:** A showcase page of modern/experimental CSS techniques. Each technique is a React component rendered in a card with title, CSS tags, browser support badge, and a demo area.

**Adding a new trick:**
1. Create `src/components/<category>/<Name>.jsx` + `<Name>.module.css`
2. Add an entry to `src/tricks.jsx` — the array is the single source of truth for the sidebar and the page

**Key files:**
- `src/tricks.jsx` — array of `{ id, title, description, tags, support, component }`
- `src/hooks/useActiveSection.js` — `IntersectionObserver` hook that tracks which section is scrolled into view, used to highlight the active sidebar link
- `src/components/TrickSection.jsx` — card wrapper (header with tags/support badge + demo area)
- `src/components/Sidebar.jsx` — sticky navigation with anchor links; receives `activeId` from the hook
- `src/index.css` — CSS reset + global CSS custom properties (colors, fonts, dark mode via `prefers-color-scheme`)

**CSS conventions:**
- Every component has its own `*.module.css` — no global class names in components
- Global tokens (`--accent`, `--bg`, `--border`, `--text`, `--mono`, etc.) are defined in `src/index.css` and used freely inside module files
- Dark mode is handled entirely via `@media (prefers-color-scheme: dark)` in `index.css`; components do not need their own dark mode rules if they use the CSS variables

**React Compiler is enabled** — do not add `useMemo`, `useCallback`, or `React.memo` manually; the compiler handles memoization automatically.
