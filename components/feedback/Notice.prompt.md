Notice: a short message with a sticker beside it.

```jsx
<Notice icon="envelope-simple">Your note is on its way.</Notice>
<Notice tone="warn" icon="warning">That photo is too large. Try one under 10 MB.</Notice>
<Notice tone="gold" icon="gift">Everything is in. Nicely done.</Notice>
```

- Use `warn` only for things that went wrong. It is announced to screen readers, so don't show one unless something needs attention.
- Keep it to a sentence or two. For a single line under a field, use `ErrorText`.
