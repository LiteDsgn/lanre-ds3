Shop row: one purchasable per row inside the Shop panel; the first row is the featured hero offer.

```jsx
<ShopRow tone="featured" icon={<GameIcon kind="coins" size={48} />} title="3,000 coins" subtitle="One-time offer" price="USD 3.99" tag={<Tag tone="gold">3x the value</Tag>} onBuy={buy} />
<ShopRow icon={<GameIcon name="prohibit" tone="berry" size={44} />} title="No ads" subtitle="Rewarded videos still available" price="USD 0.99" />
<ShopRow icon={<GameIcon kind="coin" size={44} />} title="2,720 coins" price="USD 0.99" tag={<Tag>Most popular</Tag>} />
```
