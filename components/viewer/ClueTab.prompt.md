Clue tab: where the contributor's clue waits until it's wanted.

```jsx
{clue && <ClueTab open={clueOpen} onClick={toggleClue} />}
```

- Only show it when the contributor wrote a clue.
- It reports `aria-expanded`, so it works as a disclosure for the `ClueCard`.
