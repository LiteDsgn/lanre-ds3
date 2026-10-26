Toolbar next: the one big button, so the next thing is always obvious.

```jsx
<ToolbarNext aria-label="Next, level 7" onClick={openNext}>7</ToolbarNext>
<ToolbarNext caption="Your" gold aria-label="Your letter" onClick={openLetter}><i className="ph-fill ph-envelope-simple" /></ToolbarNext>
<ToolbarNext busy><i className="ph-fill ph-hourglass" /></ToolbarNext>
<ToolbarNext disabled aria-label="Nothing to open yet"><i className="ph-fill ph-lock-simple" /></ToolbarNext>
```

- Give it an `aria-label` that says what it opens. The visible number alone doesn't.
- It nudges every few seconds to say "this one". The nudge stops when it's pressed, disabled or busy, and with reduced motion.
- `busy` is for the moments the road rearranges itself, when there's nothing to press. It isn't a button then.
- `gold` is for the summit letter, once it's ready.
