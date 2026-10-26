Who button: the cabinet's "who" moment. It's there from the start, so who sent it is never a surprise they can't get back to.

```jsx
<WhoButton text="Ready to guess" onClick={openTray} aria-label="Who's behind this?" />
<WhoButton found name="Ada Okafor" seed="c-7" onClick={openTray} aria-label="From Ada Okafor. See who it was from again" />
```

- Give it an `aria-label` that says what pressing it does. The visible text alone doesn't.
- Before the reveal it shows the neutral mystery face, never anything about the sender.
- Use `text` to match how the level works: "Ready to guess", or "See who it's from" when it's a direct reveal.
