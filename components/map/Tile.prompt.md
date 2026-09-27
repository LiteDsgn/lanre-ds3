Board tile: for dice/board expeditions and grid puzzles. Lay tiles in a CSS grid; leave 6–8px gaps so the sides read.

```jsx
<Tile variant="sand" content="?" />
<Tile variant="reward" content={<GameIcon kind="coin" size={30} />} active onClick={pick} label="Coin tile" />
<Tile variant="hazard" content={<GameIcon name="skull" tone="white" size={28} />} />
<Tile variant="water" size={56} />
```
