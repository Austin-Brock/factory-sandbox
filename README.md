# factory-sandbox

A small React + Vite to-do app used as the test target for [software-factory](https://github.com/Austin-Brock/software-factory). The factory's agents pick up tickets, make changes here, and open pull requests for human review.

Features are kept deliberately minimal so tickets have real work to do: there is no dark mode and to-dos are not persisted between sessions.

## Commands

```bash
npm install
npm run dev     # local dev server
npm test        # Vitest + Testing Library
npm run lint    # oxlint
npm run build   # type-check and production build
```

## Layout

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | App state: add, toggle, delete to-dos |
| `src/components/` | `TodoForm`, `TodoList` |
| `src/index.css` | Styles; colors are CSS variables on `:root` |
| `src/App.test.tsx` | Behavior tests |
