World gate: the sign where the road enters a world. Place one at each world's boundary on the map.

```jsx
<div style={{ position: 'relative', height: 360 }}>
  <WorldGate world="small_chops" detail="4 memories" onNote={() => openNote('small_chops')} style={{ left: 190, top: 220, width: 300 }} />
</div>
```

- Position it from the caller. It sits at `left` and `top` of its box, centres itself on `left`, and stands on `top`, so the posts reach the ground. Set `width` from the caller as well. Around 230 to 340 works.
- The sign sets `data-world`, so the plank takes that world's accent, and its own outline colour.
- The count under the name is your call. A world with nothing in it can say "Surprises only".
- Pass `onNote` only when the author has written a note for that world. If there's no note, there's no button.
- The container ignores pointer events so it never blocks the map. Only the note button takes taps.
