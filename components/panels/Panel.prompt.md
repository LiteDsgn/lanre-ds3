Dialog panel: every modal (settings, shop, level complete, daily reward, offers) is a Panel over a scrim; one panel per screen.

```jsx
<Panel title="Settings" onClose={close}>…rows…</Panel>
<Panel title="Complete" eyebrow="Level 23" header="ribbon" footer={<Button variant="confirm" size="lg">OK</Button>}>…</Panel>
<Panel title="Daily Reward" header="sign" tone="wood" footer={<Button size="lg">Claim</Button>}>…</Panel>
<Panel title="Who sent this?" accent="teal" footer={<Button variant="confirm" size="lg">Continue</Button>}>…</Panel>
<Panel header="none" tone="sky" width={300}>…</Panel>
```

- Header choice by mood: banner = utility and level dialogs (blue; teal accent in Babe's flow), ribbon = celebration, sign = world / event / daily reward. The plate straddles the top edge, leave ~34px above the panel free.
- Put the primary action in footer (one lg button, max two).
- Place inside a fixed scrim: background var(--bg-scrim), centered.
