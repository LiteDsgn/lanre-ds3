Chunky bevelled game button: use for every tappable action (CTA, OK, Claim, Play, Buy); never a flat or outlined button.

```jsx
<Button variant="primary" size="lg" block>Claim</Button>
<Button variant="play" icon={<GameIcon name="play" size={20} />}>Level 22</Button>
<Button variant="confirm">OK</Button>
<Button variant="danger" size="sm">Cancel</Button>
<Button variant="premium" trailing={<span>USD 3.99</span>} typeface="ui">3,000 coins</Button>
<Button variant="wood" pill>Shop</Button>
<Button disabled>Locked</Button>
```

- Variants: primary (gold, dark text: the default CTA), play (blue), confirm (teal), danger (coral), premium (berry), wood, ghost (cream), locked (stone).
- Sizes: sm 36 / md 48 / lg 60. One lg button per screen (the main action); md for panel actions; sm inside rows.
- Labels are 1–2 words, Title Case in source; display typeface renders them uppercase.
- Pressed state is built in (travels down, bevel collapses). Do not add your own hover styles.
