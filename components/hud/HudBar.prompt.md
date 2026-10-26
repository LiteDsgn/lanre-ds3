HUD bar: the strip across the top of the map.

```jsx
<HudBar
  left={<>
    <HudChip icon="users-three" tone="teal" value="3/5" onClick={openPeople} aria-label="3 of 5 friends found. Open Your people" />
    <HudChip icon="sparkle" tone="berry" value="1/3" fresh onClick={findNext} aria-label="1 of 3 surprises found, a new one just arrived. Show me the next one" />
  </>}
  right={<SoundToggle on={sound} onChange={setSound} size="sm" />} />
```

- It covers the window and lets taps through to the map, so only the chips and the right slot take them. Set `contained` to place it in a positioned box.
- On a phone the right slot drops away, since sound stays one tap away in the menu. Its layout follows the window, not its box.
- Hide it with `hidden` while a sheet is open over the map.
- For the arrival (it drops in) and the climb (it steps aside), put `mp-chrome-arriving` or `mp-chrome-away` on a parent of the HUD, the toolbar and the dock.
