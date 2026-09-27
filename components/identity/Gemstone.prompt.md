Quiz gemstone: the only visual for quiz results. Colour AND cut differ per gem so it never relies on colour alone.

```jsx
const { gem, tier } = gemForScore(7);          // → amethyst II
<Gemstone gem={gem} tier={tier} size={72} />
<Gemstone gem="amber" tier={1} size={40} animate={false} />   // dense lists
<Gemstone gem="pearl" size={56} />                            // quiz skipped: keepsake, unranked
<Gemstone gem="emerald" tier={3} showTier />                  // friend-facing result / leaderboard only
```

- Babe's surfaces (reveal card, Your People) show the stone only, never score, rank or tier text. Friends' surfaces may add showTier and the score.
- Tier III = halo (+ sparkle). Pearl has no tiers and is never ranked or shown as a zero.
- Size ≥ 28 in lists, 56–72 on cards. Tap-to-explain is allowed: wrap in a button with aria-label "About this gem".

Project update: Babe’s gems use decorative={true}: no labels, including accessibility labels. Default decorative is !showTier; contributor-facing showTier still exposes labels. See PROJECT-DECISIONS.md.
