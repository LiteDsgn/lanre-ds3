Live countdown that ticks every second. The board is the big wooden one for a front gate or a title screen. The chip is a ticking TimerChip for the HUD.

```jsx
<Countdown to="2026-12-24T00:00:00" label="the party" caption="24 December" />
<Countdown variant="chip" to={deadline} label="the deadline" ended={<TimerChip icon="heart" time="Late entries welcome" />} />
<Countdown to={opensAt} title="Doors open in" icon="door-open" />
<Countdown to="2026-12-24T00:00:00" now={Date.parse('2026-12-20T09:30:00')} />   // frozen, for fixtures
```

- Give a `label` for what it counts down to. Screen readers hear "3 days, 4 hours and 12 minutes until the party". The seconds are left out so it isn't noisy.
- It renders nothing on the server and until the page hydrates, because the server's clock isn't the visitor's. Leave room for it if the layout would jump.
- When the time passes it shows `ended`, which is nothing by default. Swap in a message or another component.
- The board fills its container's width and scales its tiles to fit. One board per screen.
- The chip turns urgent in the last day. Change that with `urgentWithin`.
- Don't hard-code dates in components. Pass them in, so fixtures and real data stay separate.
