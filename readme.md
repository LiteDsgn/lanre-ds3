# Lanre: design system for a casual exploration game

Lanre is a design system for mobile "exploration" games: a world map with a winding trail of level pucks, expedition boards, a camp/inventory grid, and the layer of panels every casual game needs (level start/complete, shop, daily reward, settings). It is bright, chunky and tactile, painted meadow greens, sky-blue actions, gold rewards, wood frames, and everything pressable has a solid bottom edge.

There is no existing product or brand behind it. It was synthesised from nine reference screenshots supplied by the user (casual level maps, an idle farm, dice/board events, a purple-dusk UI kit, a bubbly loading screen, a wood-framed daily reward, a Chinese travel-event board, a cat-eared settings panel and a level-complete dialog). The name, palette, type pairing and component inventory are original.

## Product surfaces
One product: a portrait mobile game (390 × 844 design frame). Surfaces covered by the UI kit (`ui_kits/lanre-game/`): world map, expedition (board) event, camp/inventory, and the dialog layer.

---

## CONTENT FUNDAMENTALS

- **Voice:** warm, short, imperative. The game talks to one player ("Pick your daily gift!"), never about itself. No "we".
- **Actions are one word in display caps:** CLAIM · OK · PLAY · SPIN · SHOP · GO. Never "Click here", "Submit", "Continue".
- **Titles are noun phrases ≤ 3 words**: display face, uppercase: LEVEL 23 · DAILY REWARD · COMPLETE · x2 BOOST.
- **Prompts and rows are sentence case**: UI face, 600–700: "Sound", "Vibration", "Pick your daily gift!", "One-time offer". One exclamation mark per screen at most.
- **Fine print** is plain sentences at 12–14px in muted ink ("You will still be able to watch rewarded videos.").
- **Numbers do the talking.** Always show the delta, fraction or countdown rather than describing it: `+500`, `3/6`, `00:02`, `6/20`, `75%`.
- **Number formatting:** currency uses `k`/`M` suffixes and comma groups (`50,253k`, `1.2M`, `2,720`); scores use thin-space groups (`14 000`); timers are `mm:ss` or `4h 12m`; prices show the currency code, not a symbol (`USD 0.99`).
- **Places and progress are proper nouns:** Warmful Valley, Pine Ridge, Day 3, Level 22.
- **Merchandising labels** are 1–3 uppercase words in a Tag: MOST POPULAR · 3X THE VALUE · ONE-TIME OFFER · NEW.
- **No emoji, ever.** Glyphs are painted icons (GameIcon), not characters.
- Casing summary: display type is rendered uppercase by CSS (write Title Case in source); UI type is sentence case; small labels (SCORE, REWARD, LANGUAGE) are UI caps with 0.08–0.12em tracking.

## VISUAL FOUNDATIONS

**Colour.** A painted, saturated, warm-leaning palette in oklch. Every tone is a 5-step ramp (100 → 900) used with one recipe: **500 is the face, 300 the top highlight, 700 the bevel/side, 900 the outline.**
- *Meadow green*: the environment (grass gradient `--bg-meadow`, bushes, board tiles).
- *Sky blue*: action and "current": play buttons, the current/complete level puck, water.
- *Gold*: reward and the primary CTA (coins, stars, CLAIM). Gold buttons take dark brown text, never white.
- *Coral*: danger/urgency, hearts, close buttons. *Teal*: confirm/OK/value. *Berry (magenta)*: premium, boosts, hazards.
- *Wood*: frames, fences, signs, the bottom bar. *Stone*: anything locked or disabled (replaces the tone wholesale).
- *Parchment* creams for panel surfaces; *ink* is warm brown (`--ink-900`), never black.
- Semantic aliases (`--action-*`, `--state-*`, `--currency-*`, `--surface-*`, `--text-*`) are what components read; see `guidelines/colors-semantic.html`.

**Type.** Two faces. *Titan One* (display, one weight) for titles, numerals, button labels, always uppercase with +0.02em tracking. *Quicksand* 500/600/700 (UI) for rows, body, captions. Scale: display 44/32/24/18/14; UI 20/16/14/12/11. Text that sits directly on the world is **outlined**: white fill, dark stroke painted behind the fill (`paint-order: stroke fill`, stroke 0.16em; 0.20em under 20px), hard 10% drop. Stroke tone follows the surface (ink on grass, blue on blue pucks, stone on locked pucks, wood on planks). Minimum text size 11px; button labels ≥ 14px.

**Spacing & layout.** 4px base (`--space-1…16`). Touch targets ≥ 48px; primary CTA 60px. Fixed 56px HUD strip (level star + XP left, currency pills right, gear); the world scrolls beneath it; 88px wood bottom bar with 4 captioned square icon buttons; side rails hold captioned icon buttons stacked 14–16px apart. Panels are centred, max 340px wide, never edge-to-edge, over a `--bg-scrim` veil. Grids: inventory 4 columns × 72px with 8px gaps; reward calendar 3 columns.

**Backgrounds.** Painted world art is the intended ground; until it exists, CSS gradients stand in: `--bg-meadow` (grass), `--bg-sky` (loading/light), `--bg-dusk` (evening/premium). Decorative bushes, rocks and flowers are simple CSS blobs; hero illustrations get a dashed, striped **placeholder slot** with a monospace note (never hand-drawn art). No textures, no photo imagery, no repeating patterns beyond the diagonal stripe on progress fills.

**Depth (the signature).** Everything pressable is a **bevel**: gradient face (300 → 500 to 42%), a hard `0 N px 0` shadow in the 700 tone as the bottom edge (3/5/7px for sm/md/lg), a soft brown drop below, and an inset 2px white line on top. Pressing translates the element down 4px and collapses the edge to 1px (120ms ease-out). Hover only brightens 6%. Pucks are ellipses with the same recipe plus two white gloss spots. Tracks and cells are **inset** (dark translucent brown or green with an inner shadow). Shadows are brown-tinted (`oklch(0.22–0.25 0.05 60)`), never grey. Glow rings (tone at 50% + 70% bloom) mark the tappable or rewarded thing.

**Corners.** Everything is rounded: 6 tags, 10 badges/knobs, 16 buttons/cells/cards, 22 rows/tabs, 28 panels, pill for tracks and HUD pills; pucks and blobs are 50% ellipses.

**Borders.** Panels have a 4px border in the next-darker cream (wood panels 6px in wood-500); cells a 3px translucent white; badges and tokens a 2–3px solid white ring. No 1px hairlines.

**Transparency & blur.** Translucent surfaces only over the world (HUD pills at 82% brown, inventory cells at 30% green, scrim at 55%). No backdrop blur anywhere.

**Motion.** Arrivals bounce (`--ease-bounce`, 420ms: stars, toasts, panels via `mp-pop`); presses ease-out at 120ms; claimable things idle-float (`mp-float`, 2.4s); the current level and reachable tile pulse a ring (`mp-pulse-ring`, 1.6s); progress fills animate width over 420ms. No fades-only, no parallax.

**States.** Pressed = travel down + collapsed edge. Disabled/locked = stone tones + 85% opacity (never greyscale filters on buttons; RewardCard uses desaturation because it must keep its prize readable). Selected = teal border + glow. Current = blue + pulse. Complete = blue + star row.

**Imagery.** Warm, saturated, painterly with dark outlines, the same language as the icons. Photos are never used.

## ICONOGRAPHY

- **Set:** [Phosphor Icons](https://phosphoricons.com) via CDN (`tokens/icons.css` imports the **FILL** and **BOLD** weights). This is a substitution: the references use bespoke painted icons; Phosphor's filled weight is the closest CDN match to their chunky silhouettes. Replace with painted PNG/SVG art in `assets/` when available.
- **Treatment:** `GameIcon` renders a filled glyph in a tone with a dark outline painted behind (`-webkit-text-stroke` + `paint-order: stroke fill`) and a hard drop, so every icon reads like a sticker. Semantic kinds fix glyph + tone together (coin = gold `coin`, gem = blue `sketch-logo`, ruby/heart = coral, energy = teal `lightning`, gift = berry, lock = stone…).
- **Weights:** FILL for pictorial glyphs (coins, stars, hearts, gifts, chests); BOLD for utility strokes (×, +, ✓, carets, gear). Inside a bevelled button the glyph is plain white with no outline/shadow (the button already carries depth).
- **Sizes:** 20 / 28 / 40 / 56 (`--size-icon-*`). Currency glyphs overlap the left edge of their pill.
- No icon fonts other than Phosphor, no emoji, no unicode characters as icons.
- No logo was provided; the name is set in `.mp-display .mp-outline` wherever a mark would go. Nothing was drawn or reconstructed.

---

## PROJECT LAYER: Lanre's Birthday Adventure

Source: the shared build brief (12 Sep 2026). The generic Lanre kit above is the base; this layer adds the components and rules that brief needs. Names in every demo are fictional fixtures; no quiz facts, narrator copy or letter text are supplied here.

**Two audiences, two surfaces.** Babe's experience: iPad-first, phones supported, no hard device block. Flow: opening → map → level → reveal → progress → summit. Contributor flow (Claude): phone-first, no account: onboarding → composer → theme → suitability → preview → submit → optional quiz → gem + leaderboard → private edit link.

**Worlds** (`tokens/worlds.css`, `components/map/worlds.js`). `data-world="mango_grove | small_chops | good_energy | japan | summit"` scopes `--world-sky/ground/ground-deep/bg`, `--world-accent/-shade` (signs, chips), `--world-path/-edge` (the road) and `--world-stroke` (outlined text). Numbering runs continuously across worlds; uneven populations are fine and never padded. Summit is Henry's letter, never a contributor choice.

**Gemstones** (`tokens/gems.css`, `Gemstone`, `gemForScore`). Score 0–2 Amber I/II/III · 3–5 Emerald · 6–8 Amethyst · quiz skipped → Pearl keepsake, unranked (not a zero). Tier I plain, II adds a sparkle, III adds a halo (proposed: III keeps the sparkle). Cuts differ per gem (hexagon / octagon / kite / round) so colour is never the only signal. **Babe's surfaces show the stone only**, no score, rank or tier text on the reveal card or in Your People; `showTier` and scores are friend-facing.

**Identity & anonymity** (`Avatar`, `RevealCard`, `PersonTile`, `guidelines/brand-anonymity.html`). Before a reveal a level may show: the neutral mystery avatar, the level number, the contributor's own clue, neutrally titled media ("Voice note", "Photo 2") and up to three real names. Never: sender name/relationship/portrait/generated avatar, anyone's gem or score, filenames, EXIF/metadata, or sender data merely hidden in the DOM, it must not be in the payload. Portraits are optional; the generated avatar is seeded by contributor id so it is stable. Self-revealing media (face, spoken name) is flagged honestly by the contributor and routed to a matching game or direct reveal, never a false mystery, never a promise of automatic anonymisation.

**Level loop** (`PackageStepper`, `MemoryText`, `PhotoStack`, `AudioPlayer`, `VideoFrame`, `ChoiceButton`, `RevealCard`, `MatchCard`). Package items render in the contributor's order; nothing auto-advances, media never cuts off, every player has pause/seek; completion is an explicit Continue and does not require watching everything. Guess: wrong = coral + ×, retry stays open, "Just tell me" is always offered; correct = green + ✓, others dim; then the card flips. The interaction type (guess / match / direct) is chosen once per level and persisted. Completed levels stay replayable.

**Map additions** (`WorldGate`, `DiscoveryMarker`). Gates mark world boundaries and carry Henry's authored note when one exists (no card otherwise); the summit gate is locked until the main path completes. Discoveries sit beside the road as thematic objects (mango, rice bowl, flower, dumbbell, lantern, gift): `hidden` (glinting bush), `available`, `new` (late arrival after the route froze, never a new numbered level), `opened`. This game has no star scores: use `LevelNode` with `stars={0}`.

**Contributor kit** (`StepBar`, `TextField`, `UploadTile`, `WorldChip`, `RadioCard`). Tell contributors plainly it is a surprise shown to Lanre; show what stays anonymous vs. revealed. Upload tiles keep order = Babe's order; a failed upload blocks submission until fixed or removed; filenames are contributor-side only. One package per contributor is the main-path memory; others become discoveries.

**Quiz & leaderboard** (`LeaderboardRow`, `ChoiceButton`). Eight questions, one point each, no timer, first completed attempt counts, ties share rank ("=3"), skipped players hold a pearl and sit unranked. Friends only. Copy celebrates participation.

**Access & privacy** (`guidelines/a11y.html`, `tokens/utilities.css`). Targets ≥ 48 (choices 56/64, Continue 60); memory text 20px/1.6 on iPad, 17 on phones; colour-independent states everywhere (glyphs, cuts, spelled-out sound state); `prefers-reduced-motion` collapses all motion (flips become swaps); `:focus-visible` 4px gold outline; real buttons/inputs/switch/radio roles; nothing plays before the deliberate Ready tap and `SoundToggle` is always reachable.

**Layout defaults (proposed, not approved).** iPad portrait 820 / landscape 1180, phone 390; reading column ≤ 640; iPad panels ≤ 560; design portrait-first and let landscape place media beside text (`guidelines/spacing-ipad.html`). Orientation, final title, narrator copy, quiz questions, letter, private access mechanism and upload limits remain open inputs.

**Voice adjustments for this project.** Henry speaks to "Babe" in the second person; the tone is warm, playful and brief, never a test: "Just tell me", "Try again", "Keep exploring", "Continue". Do not invent jokes on Lanre's behalf or a finished letter. In Babe's flow the turquoise (teal) button is the default continue/confirm (per the panel reference); gold is reserved for rewards and the summit.

---

## Index

- `showcase.html`: **start here**: browsable showcase of principles, foundations, live components with code, and the playable kit.
- `styles.css`: global entry; `@import`s every token file below.
- `tokens/`: `fonts.css` (Google Fonts import: Titan One, Quicksand), `icons.css` (Phosphor CDN), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, bevels, shadows, glows, motion), `utilities.css` (`.mp-display`, `.mp-ui`, `.mp-label`, `.mp-outline*`, keyframes `mp-float / mp-pulse-ring / mp-pop / mp-sparkle / mp-shimmer`).
- `guidelines/`: 24 specimen cards (Colors ×9, Type ×4, Spacing ×3, Effects ×4, Brand ×4) shown in the Design System tab.
- `components/`: 19 React primitives, each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, one preview card per group:
  - `buttons/`: **Button** (8 tones × 3 sizes, display/ui typeface, pill, block), **IconButton** (circle/square, badge, outlined caption).
  - `hud/`: **CurrencyPill** (coin/gem/ruby/heart/energy/star/key, + button), **ProgressBar** (striped, cap, label, dark/light track), **TimerChip**.
  - `panels/`: **Panel** (banner / ribbon / sign headers with blue·gold·teal·green·berry·coral accents; cream / wood / sky tones; close; footer).
  - `map/`: **LevelNode** (locked / current / complete puck), **StarRating** (flat / arc / animated), **Tile** (grass / sand / stone / water / reward / hazard / start).
  - `rewards/`: **RewardCard** (claimed / available / locked, featured), **ItemCell** (empty / filled / locked / add, selected, dim), **ShopRow** (default / featured, tag, price).
  - `forms/`: **Switch**, **Slider**.
  - `feedback/`: **Badge**, **Tag**, **Toast**.
  - `text/`: **OutlineText**. `icons/`, **GameIcon**.
  - Adventure layer: `identity/`: **Gemstone**, **Avatar**, **RevealCard**, **PersonTile**; `levels/`: **ChoiceButton**, **PackageStepper**; `media/`: **MemoryText**, **AudioPlayer**, **VideoFrame**, **PhotoStack**; `map/`: **WorldGate**, **DiscoveryMarker**, `worlds.js`; `games/`: **MatchCard**; `contributor/`: **StepBar**, **TextField**, **UploadTile**, **WorldChip**, **RadioCard**; `quiz/`: **LeaderboardRow**; `feedback/`: **SoundToggle**.
- `tokens/worlds.css`, `tokens/gems.css`: world scopes and gem tones; iPad/phone layout tokens in `spacing.css`; memory/letter sizes in `typography.css`; focus ring + reduced motion in `utilities.css`.
- `guidelines/worlds.html`, `colors-gems.html`, `spacing-ipad.html`, `a11y.html`, `brand-anonymity.html`: project specimens.
- `ui_kits/lanre-game/`: interactive mobile game (`index.html`, `App.jsx`, `Hud.jsx`, `MapScreen.jsx`, `BoardScreen.jsx`, `CampScreen.jsx`, `Dialogs.jsx`, `README.md`).
- `tools/ds-loader.js`: preview loader: uses the compiled `_ds_bundle.js` when present, otherwise transpiles component sources in-browser. Cards and the UI kit load through it.
- `assets/`: empty by design (see `assets/README.md`).
- `SKILL.md`: agent skill wrapper.

### Intentional additions
This is a from-scratch system (no source inventory), so the component set is the standard casual-game kit rather than a copy of any reference: HUD pills, bevelled buttons, pucks, tiles, reward cells, panels, switches/sliders, badges/tags/toasts, outlined text and the icon wrapper.

### Caveats
- **Fonts** are loaded from Google Fonts (`tokens/fonts.css`), not shipped as files. Titan One and Quicksand are matches for the bubbly display / rounded UI faces seen in the references, not the exact typefaces those games use.
- **Icons** are Phosphor (CDN) with a CSS outline treatment standing in for painted icon art.
- **Imagery**: no illustrations exist; screens reserve striped placeholder slots.
- **Bundle**: `_ds_bundle.js` is generated by the compiler; until it exists, previews fall back to in-browser transpilation via `tools/ds-loader.js` (React 18 UMD + Babel standalone pinned to 7.26 for the classic JSX runtime).
- Isometric (diamond) boards from two references are not modelled; `Tile` is a top-down rounded square.
