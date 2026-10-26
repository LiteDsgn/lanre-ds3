Segmented tabs: switch between two or three views in place.

```jsx
<SegmentedTabs label="Collection" value={tab} onChange={setTab}
  items={[{ id: 'people', label: 'People · 3 of 8' }, { id: 'keepsakes', label: 'Keepsakes · 2' }]} />
```

- Controlled: keep the chosen id in state and render the matching view yourself.
- Keep labels short. The group is as wide as its tabs and never wider than its container.
- For moving between steps of a flow, use `StepBar`; this is for views of one thing.
