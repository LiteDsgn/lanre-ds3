Heading: the top of a screen.

```jsx
<Heading eyebrow="Step 2 of 4" title="Pick a spot on the road" lede="Choose where your memory should live." />
<Heading title="All done" size={42} />
```

- Titles are uppercase, so keep them to a few words. Long ones wrap evenly; lower `size` for the longest.
- The outline follows the surrounding `data-world`, so the same heading suits every world.
- One `h1` per screen. Use `as="h2"` for headings inside a panel.
