Painted game glyph (Phosphor FILL + outline + drop), the only way icons appear in Lanre; never a bare stroke icon or emoji.

```jsx
<GameIcon kind="coin" size={32} />
<GameIcon kind="gem" />
<GameIcon kind="heart" size={20} />
<GameIcon name="anchor" tone="blue" size={40} />
<GameIcon kind="gear" outline={false} shadow={false} size={22} />   // plain white glyph inside a button
```

- Prefer a semantic kind (coin, gem, heart, star, energy, gift, lock…) so tones stay consistent across screens.
- Inside bevelled buttons turn outline/shadow off (the button already carries depth).
- Currency glyphs are always gold coin, blue gem, coral ruby/heart, teal energy.
