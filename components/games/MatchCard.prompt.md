Match card: for levels whose media already reveals the sender: a 6-card (3 pairs) or 8-card grid, then the direct reveal. Always paired with a Skip button.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 84px)', gap: 12 }}>
  {cards.map(c => <MatchCard key={c.id} symbol={c.symbol} face={c.face} onClick={() => flip(c.id)} />)}
</div>
<Button variant="ghost" typeface="ui">Skip</Button>
```

- Choose the interaction once per level and persist it; don't re-roll on each render.
- Symbols come from Lanre's world: mango, rice bowl, flower, dumbbell, lantern.
