Inventory cell: grids of collectibles, merge items, party slots. 4 columns on mobile, 6px gaps, laid over grass.

```jsx
<ItemCell state="filled" content={<GameIcon kind="egg" size={44} />} count={1} selected onClick={select} />
<ItemCell state="filled" content={<GameIcon kind="leaf" size={44} />} count={4} dim />
<ItemCell state="empty" />
<ItemCell state="locked" />
<ItemCell state="add" onClick={buySlot} label="Buy slot" />
```
