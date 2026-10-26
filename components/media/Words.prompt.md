Words: a written memory filling its box. Put it in a box with a height, such as a screen or a sheet.

```jsx
<div style={{ position: 'relative', height: 480 }}>
  <Words text={memory.text} typed={seen} onTyped={() => setSeen(true)} label="Their message" />
</div>
```

- Under 180 characters it sits big in the middle and types itself in, once. Pass `typed` once it has, so coming back to it doesn't type again. With reduced motion it's already there.
- Anything longer lays out as paragraphs at a reading size, and scrolls. A "Scroll to keep reading" hint shows until you reach the end. A blank line in `text` starts a new paragraph.
- The box is focusable, so keyboard users can scroll it. Give it a `label` that names the message neutrally, never the sender.
- For a written letter on a parchment card, use `MemoryText`.
