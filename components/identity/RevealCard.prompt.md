Reveal card: the payoff of a mystery level. Show the mystery face while she guesses; set revealed after a correct guess, a "Just tell me", or a completed matching game.

```jsx
<RevealCard revealed={done} name="Ada Okafor" relationship="Sister" seed="c_01" gem="emerald" tier={2} clue="We met over jollof." onGemTap={explainGem} />
```

- The revealed face must not include score, rank or tier text, the stone alone. (Friend-facing surfaces may.)
- Flip respects prefers-reduced-motion (instant swap). Don't render the sender's data into the DOM before revealed, the back face is hidden, not secret.
- Never gate the reveal behind a correct answer: wrong answers offer retry and direct reveal.

Project update: only supply real identity props after the server authorises reveal. The component mounts the identity face only when revealed. Recipient gems are decorative; onGemTap is retained as a legacy prop but no longer renders a gem button.
