HUD currency pill: the top-bar readout for coins, gems, hearts, energy; also used inline for a cost or a count ("3/3").

```jsx
<CurrencyPill kind="coin" value="50,253k" onAdd={() => openShop()} />
<CurrencyPill kind="gem" value={36} onAdd={openShop} />
<CurrencyPill kind="heart" value="5/5" size="sm" />
<CurrencyPill kind="energy" value={32} tone="light" />
```

- Top HUD: 2–3 pills max, right-aligned, size md, tone dark. Numbers are pre-formatted strings (50,253k, 1.2M).
- Inside panels use tone="light".
- onAdd only on purchasable currencies.
