# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start both client and server concurrently
npm run dev:client   # Start Vite dev server only
npm run dev:server   # Start Express/WebSocket server only (tsx watch)
npm run build        # TypeScript compile + Vite build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

The Vite client proxies API requests to the Express server at `localhost:3001`.

## Architecture

A React + TypeScript drawing application built on the [`@excalidraw/excalidraw`](https://docs.excalidraw.com) library.

**Entry point flow:** `index.html` → `src/main.tsx` → `src/App.tsx`

**Key modules:**

- `src/App.tsx` — Main component. Holds state for `excalidrawAPI`, `viewMode`, `zenMode`, and `gridMode`. Renders the header, mode-toggle toolbar, scene update/reset buttons, and the `<Excalidraw>` canvas.
- `src/scenes/scenes.ts` — Exports `defaultScene` (sample Excalidraw element data). Used when the "Update Scene" button is clicked.
- `src/App.css` — CSS overrides for Excalidraw's internal layout and zen mode transitions.

**Tech stack:** React 19, Vite 7, TypeScript 5 (strict), Tailwind CSS 4, `@excalidraw/excalidraw` 0.18.

**Excalidraw API access:** The canvas ref is captured via the `excalidrawAPI` state and the `ref` prop on `<Excalidraw>`. Scene manipulation (e.g., `updateScene`) happens through this API object.
