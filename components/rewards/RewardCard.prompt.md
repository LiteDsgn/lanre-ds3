Reward card: cells of a daily/streak calendar or a prize track. Grid of 3 per row inside a wood Panel; the last day is featured.

```jsx
<RewardCard title="Day 1" icon={<GameIcon kind="coin" size={40} />} amount="+1M" state="claimed" />
<RewardCard title="Day 3" icon={<GameIcon kind="gift" size={40} />} state="available" onClick={claim} />
<RewardCard title="Day 5" icon={<GameIcon kind="gem" size={40} />} amount="+10" state="locked" />
<RewardCard title="Day 7" featured icon={<GameIcon kind="heart" size={44} />} amount="+50" state="locked" />
```
