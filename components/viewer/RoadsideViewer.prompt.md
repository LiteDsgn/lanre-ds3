Roadside viewer: a memory opened over the map, in a wooden cabinet with its own sign.

```jsx
<RoadsideViewer world="small_chops" signEyebrow="Small Chops, Big Gist" signTitle="Level 4" eyebrow="2 of 3 · Photo" title="The day at the beach"
  who={<WhoButton text="Ready to guess" onClick={openTray} />}
  keys={<ViewerKeys pieces={pieces} at={at} onSelect={setAt} />}
  knob={<ViewerKnob label="Next: voice note" onClick={next} />}
  pieceKey={at} onClose={back} layers={tray}>
  <Album photos={photos} />
</RoadsideViewer>
```

- The memory comes first. Who sent it is a separate moment, in a `RevealTray` that opens over the cabinet.
- The screen plays one piece at a time: `Words`, `Album`, `Cassette` or `Film`. Change `pieceKey` when the piece changes so the next one arrives with its entrance.
- The deck's one big button says what happens next: the next piece, then who, then onwards. Pass a `ViewerKnob` for it, and `ViewerKeys` for the keys.
- Set `loading` while the memory arrives. The cabinet is already there, with its screen switched off and "Tuning in". If it can't load, pass `error` and `onRetry`.
- A surprise beside the road is `kind="discovery"` and `leafy`, with a `ribbon` like "Just arrived".
- By default it covers the window like a sheet. Set `contained` to place it in a positioned box.
- Its layout follows the window, not the box it's in: phones, iPad and desktop each get their own sizes. So `contained` is for a box about as big as the window, such as a docs preview. A small box on a wide window gets the desktop layout and will clip.
- The sign's heading names the dialog. Keep `titleId` unique if two are ever open.
