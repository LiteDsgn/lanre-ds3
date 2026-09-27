World chip: "Where does this memory belong?" Exactly one selected per package; the summit is never offered.

```jsx
{['mango_grove', 'small_chops', 'good_energy', 'japan'].map(w => <WorldChip key={w} world={w} showBlurb selected={theme === w} onClick={() => setTheme(w)} />)}
```

- Prompts are inspiration, not categories: contributors may combine themes and still pick one world for placement.
