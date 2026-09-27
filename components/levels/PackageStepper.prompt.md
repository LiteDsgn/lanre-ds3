Package stepper: shows the contributor's chosen order and lets Babe move between items. Order is preserved exactly as authored.

```jsx
<PackageStepper items={[{ type: 'text' }, { type: 'photo' }, { type: 'audio' }, { type: 'video' }]} current={i} seen={seen} onSelect={setI} />
```

- Moving on is always an explicit tap (a step or Continue). Media ending never advances the stepper.
- Completing a level does not require every item to be seen; the stepper is a map, not a checklist.
