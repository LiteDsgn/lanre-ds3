World chip: shows which world a memory is in, and opens a way to change it.

```jsx
<WorldChip world={memory.world} onClick={() => setPicking(true)} aria-label={`Where on the road: ${worldName}. Tap to change.`} />
```

- Always filled with the world's accent, because it shows a choice that's already made. To choose a world in the first place, use `WorldSign`s or a list of `WorldOption`s.
- Give it an `aria-label` that says what it is and that pressing it changes the world. The visible name alone doesn't.
- The name is cut off with an ellipsis before it pushes anything else out of the row, so it gives way first on narrow phones.
