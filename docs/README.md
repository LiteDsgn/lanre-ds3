# Lanre docs

The Fumadocs handbook for the Lanre design system. It's a Next.js app that imports the components straight from `../components`, so it always documents the code as it is.

```bash
npm install      # from the repo root (this folder is an npm workspace)
npm run docs     # http://localhost:3000
```

Run `npm run storybook` alongside it so the "Open in Storybook" links work. Point them at a deployed Storybook with `NEXT_PUBLIC_STORYBOOK_URL`.

## How it's put together

- `content/docs/`: the pages, as MDX. Sidebar order lives in each folder's `meta.json`.
- `examples/`: one live example per component, rendered in a `<Preview>` on its page.
- `scripts/component-pages.mjs`: creates a page for any component that doesn't have one (`npm run component-pages -w docs`). Add the component to its list and write its example first. Existing pages are left alone.
- `lib/generate.mjs`: runs when Next starts and writes `.generated/` (ignored by git):
  - `lanre-tokens.css`: `tokens/*.css` scoped to `.lanre-preview` by `lib/scope-tokens.mjs`, so the design system's tokens can't clash with Tailwind's.
  - `tokens.json`: every token, for the specimens on the foundations pages.
  - `props.json`: each component's props from its `.d.ts`, read by `tools/read-props.js` (the same reader Storybook uses).
- `components/`: the docs' own MDX components. `Preview`, `PropsTable`, `StorybookLink`, `ColorRamps`, `TokenTable` and `WorldGrounds`.

Each component page includes its usage notes straight from `components/<group>/<Name>.prompt.md` with `<include>`, so edit the notes there.

Restart `npm run docs` after changing a token or a `.d.ts`, so the generated files catch up.
