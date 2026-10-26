Save pill: whether the person's changes are safe, in the corner of a HUD.

```jsx
<SavePill status={saveStatus} />
```

- Pass the editor's own status: `saved`, `saving` or `pending`, `error` or `conflict`. It only draws the state, so it doesn't save anything itself.
- On `error` and `conflict` it can't be pressed and says "Not saved". Put a `SaveAlert` where there's room, so the reason and a way out are on screen too.
