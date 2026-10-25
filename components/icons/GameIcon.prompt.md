Painted game glyph (Phosphor FILL + outline + drop) for any icon that stands on its own: on the world, on a panel, on a medal or a prize. Never emoji, and never the sticker look rebuilt in CSS.

```jsx
<GameIcon kind="coin" size={32} />
<GameIcon kind="gem" />
<GameIcon kind="heart" size={20} />
<GameIcon name="anchor" tone="blue" size={40} />
<GameIcon kind="gear" outline={false} shadow={false} size={22} />   // plain white glyph inside a button
```

- Prefer a semantic kind (coin, gem, heart, star, energy, gift, lock…) so tones stay consistent across screens.
- Inside a component's icon slot (`Button`, `IconButton`, `Tag`, a puck), pass plain Phosphor (`<i className="ph-fill ph-star" />`) or a GameIcon with outline and shadow off. The component already carries the depth.
- Currency glyphs are always gold coin, blue gem, coral ruby/heart, teal energy.
