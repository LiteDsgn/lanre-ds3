Viewer knob: the one big button, so there's never any doubt about what to press next.

```jsx
<ViewerKnob label="Next: voice note" onClick={next} />
<ViewerKnob label="Who's behind this?" icon="question" tone="guess" attract onClick={openTray} />
<ViewerKnob label="Saved" icon="check" tone="saved" />
```

- Its words change with the moment: the next piece, then who, then onwards. Say it in the label, never a bare "Next".
- `attract` gives the blue guess knob a nudge every few seconds. Use it only while waiting on a guess.
- With reduced motion it stays still.
