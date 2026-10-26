Viewer keys: the way around a memory with more than one piece.

```jsx
<ViewerKeys at={at} onSelect={setAt} pieces={[
  { icon: 'quotes', label: 'Message', seen: true },
  { icon: 'images', label: '3 photos' },
  { icon: 'microphone', label: 'Voice note', meta: '0:42' },
]} />
```

- Order is the contributor's order. Nothing advances by itself.
- A key for a piece already seen shows a tick. Until then it can show a short `meta` note, such as a length.
- With more than three pieces, only the key on screen keeps its name, so they all fit.
- Only show the keys when there's more than one piece.
