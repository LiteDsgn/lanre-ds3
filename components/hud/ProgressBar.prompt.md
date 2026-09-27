Striped progress bar: XP in the HUD, loading screens, boost/energy meters, quest and event progress.

```jsx
<ProgressBar value={0.42} label="42%" />
<ProgressBar value={6} max={20} tone="green" label="6/20" size="lg" cap={<GameIcon kind="star" size={36} />} />
<ProgressBar value={0.7} tone="blue" size="sm" striped={false} />
<ProgressBar value={0.3} tone="teal" track="light" />
```

- Default gold fill on a dark track; green for quest/points, blue for water/energy-style meters, coral for hearts/health.
- Width transitions on change (420ms ease-out): animate by updating value, nothing else.
