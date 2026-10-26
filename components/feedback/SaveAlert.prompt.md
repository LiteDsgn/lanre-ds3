Save alert: the plain-words version of a save that didn't go through. Pair it with `SavePill`.

```jsx
<SavePill status={status} />
<SaveAlert status={status} error={saveError} onReload={() => location.reload()} />
```

- A `conflict` is announced right away and should say that someone else changed this; give it `onReload` so there is a way out.
- An `error` is a quiet status line. With no reason given it says it will retry when the person edits again.
