Reveal tray: the moment of finding out who it was from. It opens centred over the viewer, so the memory itself is never covered up before it's been seen.

```jsx
{trayOpen && (
  <RevealTray tone="blue" revealed={!!identity} identity={identity} wobble={wobble} leaving={leaving} onBackdrop={closeTray}
    message="You found them!" actions={<><Button variant="primary" size="lg" block onClick={done}>Continue</Button><TrayLink onClick={closeTray}>Read it again</TrayLink></>}>
    <TrayPrompt>Who sent this?</TrayPrompt>
    <TrayClue>{clue}</TrayClue>
    <TrayChoices>{options.map((o, i) => <ChoiceButton key={o.id} index={i} size="lg" state={stateOf(o)} onClick={() => guess(o)}>{o.name}</ChoiceButton>)}</TrayChoices>
    <TrayLink onClick={tellMe}>Just tell me</TrayLink>
  </RevealTray>
)}
```

- Before the reveal the face is the neutral mystery avatar. Never put the sender in the body or the label.
- Build the body with `TrayPrompt`, `TrayClue`, `TrayChoices` (of `ChoiceButton`s), `TrayHint` and `TrayLink`. "Just tell me" is always there, so nobody is stuck.
- After a reveal, the face flips, then the name, the relationship, the line and the actions arrive one after the other. The gem is only a stone, with no score, rank or tier text.
- `tone` is blue for a level and berry for a surprise beside the road. Pass `gold` once the gem has landed, so the tray warms.
- A memory already opened is `settled`: no flip, no "You found them!", nothing to unwrap.
- Render it only while it's open. Set `leaving` for a moment before removing it, so it fades.
- A wrong guess is `wobble`, once.
