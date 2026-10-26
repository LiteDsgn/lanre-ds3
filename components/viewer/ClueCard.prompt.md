Clue card: the clue, taped over the screen.

```jsx
{clueOpen && <ClueCard clue={clue} leaving={clueLeaving} onClick={hideClue} />}
```

- Place it in the viewer's `clueCard` slot, so it sits over the screen.
- Set `leaving` for a moment before you remove it, so it fades instead of vanishing.
- The clue is the contributor's own words. Show them as written.
