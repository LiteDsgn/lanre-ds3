Level puck: the nodes along the winding path on a world map. Place them absolutely on the map; the path is drawn by the map layer.

```jsx
<LevelNode number={1} state="complete" stars={3} onClick={() => open(1)} />
<LevelNode number={4} state="current" onClick={() => open(4)} />
<LevelNode number={5} state="locked" />
<LevelNode number={9} size={64} state="locked" />
```

- Only one current node per map. Locked pucks ignore taps.
- Keep ≥ 24px of grass between pucks; alternate left/right along the path.
