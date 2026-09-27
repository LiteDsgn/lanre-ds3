Choice button: "Who sent this?" options (up to three real names, never invented) and quiz answers. Stack vertically, 10px gaps, one column.

```jsx
{options.map((o, i) => <ChoiceButton key={o.id} index={i} state={stateFor(o)} onClick={() => pick(o)}>{o.name}</ChoiceButton>)}
<Button variant="ghost" typeface="ui">Just tell me</Button>          // always offered alongside the guess
```

- Wrong answers: mark that option wrong, keep the others idle for a retry, and keep "Just tell me" available. Never lock the reveal behind a correct guess.
- After resolution set the correct one to correct and the rest to dim.
- Use size="lg" on iPad; names are sentence case in the UI face (not display caps).
