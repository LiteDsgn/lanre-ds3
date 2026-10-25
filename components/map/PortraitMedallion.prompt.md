Portrait medallion: what a completed level becomes on the map. The revealed friend on a gold pedestal, with the level number on a plate underneath. Tap to replay.

```jsx
<PortraitMedallion name="Ada Okafor" seed="c_01" number={4} onClick={() => replay(4)} />
<PortraitMedallion name="Ada Okafor" src={portraitUrl} number={4} pop onClick={() => replay(4)} />   // just completed
<PortraitMedallion name="Tunde Bello" seed="c_22" size={76} onClick={() => replay(discovery)} />     // an opened discovery: no number
```

- Only for completed levels and opened discoveries. Locked and available levels stay a `LevelNode` and never show who's behind them.
- Use the friend's portrait when there is one, otherwise their seeded avatar.
- Keep the replay label readable: it defaults to "Replay level 4, Ada Okafor". Pass `label` to change the wording, never to remove the name.
- `pop` plays the arrival once. Set it only for the level that was just finished.
- Same size as the `LevelNode` it replaces (84 by default), so the road doesn't shift.
