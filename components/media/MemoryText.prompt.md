Memory text: any written contribution, and the summit letter (size lg, ornament off, letter tokens). Text is shown exactly as written; no truncation, no "read more".

```jsx
<MemoryText size="lg"><p>{memory.text}</p></MemoryText>
<MemoryText ornament={false} style={{ fontSize: 'var(--text-letter)', lineHeight: 1.65 }}>{letterParagraphs}</MemoryText>
```

- Never render the author's name inside or near it while the level is a mystery.
- On phones use size="md". Long texts scroll inside the level; the Continue button stays reachable.
