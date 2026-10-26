Outlined display text: every title, level number or caption that sits directly on the world (grass, sky, wood) uses this; plain text goes only inside panels.

```jsx
<OutlineText size="xl">Daily Reward</OutlineText>
<OutlineText size={40} stroke="blue">7</OutlineText>          // number on a blue level node
<OutlineText size="xs" stroke="stone">Locked</OutlineText>
<OutlineText size="lg" color="gold" stroke="gold">x2 Boost</OutlineText>
```

- Stroke matches the surface it sits on: ink over grass/wood, blue on blue level nodes, stone on locked ones.
- Keep to 1–3 words; it is a label face, not a paragraph face.
