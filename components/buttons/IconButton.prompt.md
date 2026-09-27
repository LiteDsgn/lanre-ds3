Round bevelled glyph button: for close (×), settings, plus (+), and the captioned side-rail actions (SPIN / SHOP / QUESTS).

```jsx
<IconButton variant="danger" size="sm"><i className="ph-fill ph-x" /></IconButton>
<IconButton variant="ghost"><i className="ph-fill ph-gear" /></IconButton>
<IconButton variant="primary" shape="square" label="Shop" badge><i className="ph-fill ph-storefront" /></IconButton>
<IconButton variant="play" label="Quests" badge={3}><i className="ph-fill ph-clipboard-text" /></IconButton>
```

- Close buttons sit on the panel's top-right corner, overlapping the edge: variant="danger" or "play", size="sm".
- Captioned buttons (label) stack the outlined caption below; use in vertical side rails and bottom bars.
- badge renders the red notification dot (true → "!", number → count).
