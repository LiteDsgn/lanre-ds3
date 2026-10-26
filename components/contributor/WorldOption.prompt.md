World option: a row in a list of worlds, for a picker that opens over the screen.

```jsx
<div role="radiogroup" aria-label="Where on the road?" style={{ display: 'grid', gap: 10 }}>
  {worlds.map(w => <WorldOption key={w} world={w} checked={chosen === w} onChange={() => setChosen(w)} />)}
</div>
```

- Put the rows in a `role="radiogroup"` with a label. Each one is a radio button.
- The chosen row turns teal and its radio pops a tick.
- Use `WorldSign`s when there's room to make the choice a moment, and `WorldOption`s when it's a quick change in a sheet.
