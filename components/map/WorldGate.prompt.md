World gate: place one at the boundary where the road enters each world, and one at the summit.

```jsx
<WorldGate world="small_chops" levels="Levels 6–11" note={henry.notes.small_chops} />
<WorldGate world="summit" locked={!mainPathDone} />
```

- The gate sets data-world, so anything inside it (and the world section it introduces) picks up the world tokens.
- Notes are Henry's words verbatim; if there is no note, render no note card.
