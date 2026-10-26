HUD chip: a count that's also a shortcut.

```jsx
const bump = useBump(found);
<HudChip icon="users-three" value={`${found}/${total}`} bump={bump} onClick={openPeople} aria-label={`${found} of ${total} friends found. Open Your people`} />
```

- Always give it an `aria-label` that says the count in words and what a tap does. The visible "3/5" alone doesn't.
- `useBump(count)` returns true for half a second each time the count goes up, so the chip bumps and glows as something is found. It stays still when the count drops or stays the same.
- `fresh` adds a pulsing coral dot, for something that arrived after they started.
- Use `tone="berry"` for surprises. Its glyph glints now and then. With reduced motion, nothing moves.
- Disable it when there's nothing for a tap to do.
- It's a `CurrencyPill` inside a button, so the two always match.
