Toolbar: the three things always within reach on the map.

```jsx
<Toolbar>
  <ToolbarTab icon="users-three" label="Your people" onClick={openPeople} />
  <ToolbarNext aria-label="Next, level 7" onClick={openNext}>7</ToolbarNext>
  <ToolbarTab icon="list" weight="bold" label="Menu" onClick={openMenu} />
</Toolbar>
```

- Two `ToolbarTab`s and one `ToolbarNext` in the middle. The Next button rises above the bar.
- It floats at the bottom of the window, centred, and gets smaller on phones. Its layout follows the window, not its box.
- Set `contained` to place it in a positioned box.
- The fast-travel dock is separate: see `FastTravelDock`.
