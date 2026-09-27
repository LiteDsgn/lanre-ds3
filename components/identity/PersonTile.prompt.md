Person tile: cells of Babe's "Your People" collection. Order ranked people by quiz result but emphasise the gem; show no score text.

```jsx
<PersonTile state="revealed" name="Ada Okafor" relationship="Sister" seed="c_01" gem="amethyst" tier={3} onClick={open} />
<PersonTile state="mystery" />
<PersonTile state="new" name="Tunde B." seed="c_22" gem="amber" tier={1} onClick={openDiscovery} />
```

- Grid: 3 per row on phones, 5–6 on iPad, 10px gaps, over the world background.
- Mystery tiles get no identifying props at all. Late arrivals stay "new" until their discovery reveal.
