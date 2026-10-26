Confetti: paper that bursts out once, from the middle of its parent.

```jsx
<div style={{ position: 'relative' }}>
  <Confetti />
  <RevealCard />
</div>
```

- Put it in a positioned box and render it at the moment of the win. It plays once when it mounts; mount it again (change its `key`) to replay.
- It sits just above its parent's content and ignores pointer events, so it never blocks a tap.
- It is hidden for reduced motion, so don't rely on it to say anything the screen doesn't.
