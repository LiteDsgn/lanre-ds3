Fast travel dock: a way to jump along the road without scrolling.

```jsx
<FastTravelDock stops={stops} onCompass={goToNext} onTravel={travelTo} />
<FastTravelDock stops={stops} phone open={open} hiddenTotal={total} onCompass={() => setOpen(o => !o)} onNext={goToNext} onTravel={travelTo} onClose={() => setOpen(false)} />
```

- List the stops in the order the dock reads: the summit at the top and the first world at the bottom, the way the map reads.
- Each stop is `done`, `here` or `ahead`, and can show how many surprises are still hidden there. Give each a full `ariaLabel`, since the visible label is only a short word.
- The compass at the top jumps to what's next.
- On a phone, pass `phone`. The dock folds into the compass, with a count of the hidden surprises, and opens when it's tapped. Keep `open` in your state, and close it from `onClose`.
- It sits against the right side of the window, centred, and its layout follows the window. Set `contained` to place it in a positioned box.
