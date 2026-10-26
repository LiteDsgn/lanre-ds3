# Lanre: design system for a casual exploration game

Lanre is a design system for mobile "exploration" games: a world map with a winding trail of level nodes, expedition boards, a camp/inventory grid, and the layer of panels every casual game needs (level start/complete, shop, daily reward, settings). It is bright, chunky and tactile, painted meadow greens, sky-blue actions, gold rewards, wood frames, and everything pressable has a solid bottom edge.

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
- **No emoji, ever.** Glyphs are Phosphor icons (a `GameIcon` when they stand alone), not characters.
- Casing summary: display type is rendered uppercase by CSS (write Title Case in source); UI type is sentence case; small labels (SCORE, REWARD, LANGUAGE) are UI caps with 0.08–0.12em tracking.

## VISUAL FOUNDATIONS

**Colour.** A painted, saturated, warm-leaning palette in oklch. Every tone is a 5-step ramp (100 → 900) used with one recipe: **500 is the face, 300 the top highlight, 700 the bevel/side, 900 the outline.**
- *Meadow green*: the environment (grass gradient `--bg-meadow`, bushes, board tiles).
- *Sky blue*: action and "current": play buttons, the current/complete level node, water.
- *Gold*: reward and the primary CTA (coins, stars, CLAIM). Gold buttons take dark brown text, never white.
- *Coral*: danger/urgency, hearts, close buttons. *Teal*: confirm/OK/value. *Berry (magenta)*: premium, boosts, hazards.
- *Wood*: frames, fences, signs, the bottom bar. *Stone*: anything locked or disabled (replaces the tone wholesale).
- *Parchment* creams for panel surfaces; *ink* is warm brown (`--ink-900`), never black.
- Semantic aliases (`--action-*`, `--state-*`, `--currency-*`, `--surface-*`, `--text-*`) are what components read; see `guidelines/colors-semantic.html`.

**Type.** Two faces. *Titan One* (display, one weight) for titles, numerals, button labels, always uppercase with +0.02em tracking. *Quicksand* 500/600/700 (UI) for rows, body, captions. Scale: display 44/32/24/18/14; UI 20/16/14/12/11. Text that sits directly on the world is **outlined**: white fill, dark stroke painted behind the fill (`paint-order: stroke fill`, stroke 0.16em; 0.20em under 20px), hard 10% drop. Stroke tone follows the surface (ink on grass, blue on blue level nodes, stone on locked ones, wood on planks). Minimum text size 11px; button labels ≥ 14px.

**Spacing & layout.** 4px base (`--space-1…16`). Touch targets ≥ 48px; primary CTA 60px. Fixed 56px HUD strip (level star + XP left, currency pills right, gear); the world scrolls beneath it; 88px wood bottom bar with 4 captioned square icon buttons (the Birthday Adventure has its own three-slot toolbar, see the project layer); side rails hold captioned icon buttons stacked 14–16px apart. Panels are centred, max 340px wide, never edge-to-edge, over a `--bg-scrim` veil. Grids: inventory 4 columns × 72px with 8px gaps; reward calendar 3 columns.

**Backgrounds.** Painted world art is the intended ground; until it exists, CSS gradients stand in: `--bg-meadow` (grass), `--bg-sky` (loading/light), `--bg-dusk` (evening/premium). Decorative bushes, rocks and flowers are simple CSS blobs; hero illustrations get a dashed, striped **placeholder slot** with a monospace note (never hand-drawn art in a mockup or prototype). The one exception is the Birthday Adventure's map, whose scenery is a reviewed SVG library (see **Scenery** in the project layer). No textures, no photo imagery, no repeating patterns beyond the diagonal stripe on progress fills.

**Depth (the signature).** Everything pressable is a **bevel**: gradient face (300 → 500 to 42%), a hard `0 N px 0` shadow in the 700 tone as the bottom edge (3/5/7px for sm/md/lg), a soft brown drop below, and an inset 2px white line on top. Pressing translates the element down 4px and collapses the edge to 1px (120ms ease-out). Hover only brightens 6%. Level nodes are ellipses with the same recipe plus two white gloss spots. Tracks and cells are **inset** (dark translucent brown or green with an inner shadow). Shadows are brown-tinted (`oklch(0.22–0.25 0.05 60)`), never grey. Glow rings (tone at 50% + 70% bloom) mark the tappable or rewarded thing.

**Corners.** Everything is rounded: 6 tags, 10 badges/knobs, 16 buttons/cells/cards, 22 rows/tabs, 28 panels, pill for tracks and HUD pills; level nodes and blobs are 50% ellipses.

**Borders.** Panels have a 4px border in the next-darker cream (wood panels 6px in wood-500); cells a 3px translucent white; badges and tokens a 2–3px solid white ring. No 1px hairlines.

**Transparency & blur.** Translucent surfaces only over the world (HUD pills at 82% brown, inventory cells at 30% green, scrim at 55%). Surfaces never blur. The one exception is the scrim behind a modal, which softens the world by `--scrim-blur` (3px).

**Motion.** Arrivals bounce (`--ease-bounce`, 420ms: stars, toasts, panels via `mp-pop`); presses ease-out at 120ms; claimable things idle-float (`mp-float`, 2.4s); the current level and reachable tile pulse a ring (`mp-pulse-ring`, 1.6s); progress fills animate width over 420ms. No fades-only, no parallax.

**States.** Pressed = travel down + collapsed edge. Disabled/locked = stone tones + 85% opacity (never greyscale filters on buttons; RewardCard uses desaturation because it must keep its prize readable). Selected = teal border + glow. Current = blue + pulse. Complete = blue + star row.

**Imagery.** Warm, saturated, painterly with dark outlines, the same language as the icons. Photos are never used.

## ICONOGRAPHY

- **Set:** [Phosphor Icons](https://phosphoricons.com) in the **FILL** and **BOLD** weights. `tokens/icons.css` loads them from a CDN for no-build pages; an app can install `@phosphor-icons/web` and import the same two weights instead, as the birthday app does. This is a substitution: the references use bespoke painted icons; Phosphor's filled weight is the closest CDN match to their chunky silhouettes. Replace with painted PNG/SVG art in `assets/` when available.
- **Treatment:** a glyph that stands on its own (on the world, on a panel, as a medal or a prize) is a `GameIcon`: a filled glyph in a tone with a dark outline painted behind (`-webkit-text-stroke` + `paint-order: stroke fill`) and a hard drop, so it reads like a sticker. Semantic kinds fix glyph + tone together (coin = gold `coin`, gem = blue `sketch-logo`, ruby/heart = coral, energy = teal `lightning`, gift = berry, lock = stone…).
- **Inside components:** a glyph in a component's icon slot (`Button`, `IconButton`, `Tag`, a level node) is plain Phosphor (`<i className="ph-fill ph-star" />`), and the component styles it. Never rebuild the sticker look in CSS; if a glyph needs it, it's a `GameIcon`.
- **Weights:** FILL for pictorial glyphs (coins, stars, hearts, gifts, chests); BOLD for utility strokes (×, +, ✓, carets, gear). Inside a bevelled button the glyph is plain white with no outline/shadow (the button already carries depth).
- **Sizes:** 20 / 28 / 40 / 56 (`--size-icon-*`). Currency glyphs overlap the left edge of their pill.
- No icon fonts other than Phosphor, no emoji, no unicode characters as icons.
- No logo was provided; the name is set in `.mp-display .mp-outline` wherever a mark would go. Nothing was drawn or reconstructed.

---

## PROJECT LAYER: The Birthday Adventure

Source: the shared build brief (12 Sep 2026). The generic Lanre kit above is the base; this layer adds the components and rules that brief needs. Names in every demo are fictional fixtures; no quiz facts, narrator copy or letter text are supplied here.

**Two audiences, two surfaces.** The recipient’s experience: iPad-first, phones supported, no hard device block. Flow: opening → map → level → reveal → progress → summit. Contributor flow (Claude): phone-first, no account: onboarding → composer → theme → suitability → preview → submit → optional quiz → gem + leaderboard → private edit link.

**Worlds** (`tokens/worlds.css`, `components/map/worlds.js`). `data-world="base_camp | mango_grove | small_chops | good_energy | japan | summit"` scopes `--world-sky/ground/ground-deep/bg`, `--world-accent/-shade` (signs, chips), `--world-path/-edge` (the road) and `--world-stroke` (outlined text), plus scenery: `--world-sky-low` (the horizon) and `--prop-hill/-bush-hi/-bush/-bush-lo` (CSS hills and bushes). `base_camp` is the contributors' world, where friends pack their memories; it's not a stop on the road. Numbering runs continuously across the road's worlds; uneven populations are fine and never padded. Summit is the author’s letter, never a contributor choice.

**Gemstones** (`tokens/gems.css`, `Gemstone`, `gemForScore`). Score 0–2 Amber I/II/III · 3–5 Emerald · 6–8 Amethyst · quiz skipped → Pearl keepsake, unranked (not a zero). Tier I plain, II adds a sparkle, III adds a halo (proposed: III keeps the sparkle). Cuts differ per gem (hexagon / octagon / kite / round) so colour is never the only signal. **The recipient’s surfaces show the stone only**, no score, rank or tier text on the reveal card or in Your People; `showTier` and scores are friend-facing.

**Identity & anonymity** (`Avatar`, `RevealTray`, `PersonTile`, `guidelines/brand-anonymity.html`). Before a reveal a level may show: the neutral mystery avatar, the level number, the contributor's own clue, neutrally titled media ("Voice note", "Photo 2") and up to three real names. Never: sender name/relationship/portrait/generated avatar, anyone's gem or score, filenames, EXIF/metadata, or sender data merely hidden in the DOM, it must not be in the payload. Portraits are optional; the generated avatar is seeded by contributor id so it is stable. Self-revealing media (face, spoken name) is flagged honestly by the contributor and routed to a matching game or direct reveal, never a false mystery, never a promise of automatic anonymisation.

**Level loop** (`RoadsideViewer`, `ViewerKeys`, `MemoryText`, `Words`, `Album`, `Cassette`, `Film`, `ChoiceButton`, `RevealTray`, `MatchCard`). Package items render in the contributor's order; nothing auto-advances, media never cuts off, every player has pause/seek; completion is an explicit Continue and does not require watching everything. Guess: wrong = coral + ×, retry stays open, "Just tell me" is always offered; correct = green + ✓, others dim; then the face on the tray flips to the friend. A memory opens in a `RoadsideViewer`: a wooden cabinet whose screen plays one piece at a time, with a deck of keys (`ViewerKeys`) and one big button (`ViewerKnob`) that says what happens next. Who sent it is a separate moment: the `WhoButton` opens the `RevealTray` over the cabinet, so the memory is never covered before it's been seen. The contributor's clue waits in a `ClueTab` and comes out as a `ClueCard`. The interaction type (guess / match / direct) is chosen once per level and persisted. Completed levels stay replayable.

**Map additions** (`WorldGate`, `DiscoveryMarker`). A gate is the sign where a world begins: its name and how many memories it holds ("Surprises only" when it has none on the road). When the author has written a note for a world, a button under the sign opens it, and there's no button otherwise. Discoveries sit beside the road as thematic objects (mango, rice bowl, flower, dumbbell, lantern, gift): `hidden` (glinting bush), `available`, `new` (late arrival after the route froze, never a new numbered level), `opened`. This game has no star scores: use `LevelNode` with `stars={0}`.

**Scenery** (drawn in the birthday app, not shipped here). The map's scenery is original SVG drawn in code, so it's sharp on any iPad and needs no image downloads. Each world has its own mix of hills, trees, bushes, rocks, fences and stalls, and the author reviews each piece. It replaces the generic placeholder slots on the map only. The style: light from the upper left; one shade and one highlight per form; a soft contact shadow; no outlines (unlike the icons) and no SVG blur filters. Lettering, level nodes, portraits and buttons stay out of the art, so they stay sharp and tappable. New scenery joins the same library in the same style; never improvise art in a screen.

**Toolbar and fast travel** (`Toolbar`, `ToolbarTab`, `ToolbarNext`, `FastTravelDock`). The generic wood bottom bar becomes a floating cream pill with three slots: Your People, a raised blue Next button in the centre, and Menu. The button shows the next level's number, a padlock when nothing is open, and an hourglass while the road rearranges itself; once the letter is ready it turns gold and shows an envelope. A fast-travel dock in the side rail lists the five stops, the summit at the top and the first world at the bottom, as the map reads. Each stop is done, here or ahead, with a count of the surprises still hidden there. On phones the dock folds away behind a compass. The top of the map is a `HudBar` holding `HudChip`s: friends found and surprises found, each a count that is also a shortcut, with a coral dot for something new and a bump each time the count goes up (`useBump`). All three float over the window, and their sizes follow it.

**Contributor kit** (`StepBar`, `TextField`, `UploadTile`, `WorldSign`, `WorldSigns`, `WorldChip`, `WorldOption`, `RadioCard`). Tell contributors plainly it is a surprise shown to the recipient; show what stays anonymous vs. revealed. `StepBar` is the trail of step markers at the top of each screen. `WorldSign`s hang over one road, one per world with the summit locked, to choose where a memory belongs. A `WorldChip` pill then shows the choice, and `WorldOption`s change it in a sheet. `RadioCard`s sit in pairs for an honest either/or. Each `UploadTile` is one block of a memory (text, photo, video or voice note) with its upload state; blocks keep order = the recipient’s order; a failed or missing upload blocks submission until fixed or removed; filenames are contributor-side only. One package per contributor is the main-path memory; others become discoveries.

**Quiz & leaderboard** (`LeaderboardRow`, `ChoiceButton`). Eight questions, one point each, no timer, first completed attempt counts, ties share rank ("=3"), skipped players hold a pearl and sit unranked. Friends only. Copy celebrates participation.

**Access & privacy** (`guidelines/a11y.html`, `tokens/utilities.css`). Targets ≥ 48 (choices 56/64, Continue 60); memory text 20px/1.6 on iPad, 17 on phones; colour-independent states everywhere (glyphs, cuts, spelled-out sound state); `prefers-reduced-motion` collapses all motion (flips become swaps); `:focus-visible` 4px gold outline; real buttons/inputs/switch/radio roles; nothing plays before the deliberate Ready tap and `SoundToggle` is always reachable.

**Layout defaults (proposed, not approved).** iPad portrait 820 / landscape 1180, phone 390; reading column ≤ 640; iPad panels ≤ 560; design portrait-first and let landscape place media beside text (`guidelines/spacing-ipad.html`). Orientation, final title, narrator copy, quiz questions, letter, private access mechanism and upload limits remain open inputs.

**Voice adjustments for this project.** The author speaks to the recipient in the second person; the tone is warm, playful and brief, never a test: "Just tell me", "Try again", "Keep exploring", "Continue". Do not invent jokes on the author’s behalf or a finished letter. In the recipient’s flow the turquoise (teal) button is the default continue/confirm (per the panel reference); gold is reserved for rewards and the summit.

---

## Index

- **Start here**: the docs (`npm run docs`) and Storybook (`npm run storybook`), both described below. They replaced `showcase.html`.
- `styles.css`: global entry; `@import`s every token file below.
- `tokens/`: `fonts.css` (Google Fonts import: Titan One, Quicksand), `icons.css` (Phosphor CDN), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, bevels, shadows, glows, motion), `utilities.css` (`.mp-display`, `.mp-ui`, `.mp-label`, `.mp-outline*`, keyframes `mp-float / mp-pulse-ring / mp-pop / mp-sparkle / mp-shimmer`).
- `guidelines/`: 24 specimen cards (Colors ×9, Type ×4, Spacing ×3, Effects ×4, Brand ×4) shown in the Design System tab.
- `components/`: 42 React components, each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, one preview card per group:
  - `buttons/`: **Button** (8 tones × 3 sizes, display/ui typeface, pill, block), **IconButton** (circle/square, badge, outlined caption), **SegmentedTabs** (pill tab switch).
  - `hud/`: **CurrencyPill** (coin/gem/ruby/heart/energy/star/key, + button), **ProgressBar** (striped, cap, label, dark/light track), **TimerChip**, **Countdown** (live: wooden board or ticking chip), **HudBar** (the map's top bar) and **HudChip** (a count that's also a shortcut).
  - `panels/`: **Panel** (banner / ribbon / sign headers with blue·gold·teal·green·berry·coral accents; cream / wood / sky tones; close; footer), **Modal** (the shell around a Panel: scrim, Escape, scroll lock, focus, fade).
  - `map/`: **LevelNode** (locked / current / complete node), **StarRating** (flat / arc / animated), **Tile** (grass / sand / stone / water / reward / hazard / start).
  - `rewards/`: **RewardCard** (claimed / available / locked, featured), **ItemCell** (empty / filled / locked / add, selected, dim), **ShopRow** (default / featured, tag, price).
  - `forms/`: **Switch**, **Slider**.
  - `feedback/`: **Badge**, **Tag**, **Toast**, **Sticker**, **Notice**, **ErrorText**, **SavePill**, **SaveAlert**.
  - `text/`: **OutlineText**, **Heading** (tag, outlined title and cream plate). `icons/`, **GameIcon**.
  - Adventure layer: `identity/`: **Gemstone**, **Avatar**, **AvatarButton**, **PersonTile**; `levels/`: **ChoiceButton**; `toolbar/`: **Toolbar**, **ToolbarTab**, **ToolbarNext**, **FastTravelDock**; `viewer/`: **RoadsideViewer** (the cabinet), **ViewerKeys**, **ViewerKnob**, **WhoButton**, **ClueTab**, **ClueCard**, **RevealTray** (the guess tray and the reveal); `media/`: **MemoryText**, **Words**, **Album** (with a full-screen lightbox), **Cassette** (voice note), **Film** (video), **Unavailable**; `map/`: **WorldGate**, **DiscoveryMarker**, **PortraitMedallion** (completed levels), `worlds.js`; `games/`: **MatchCard**; `contributor/`: **StepBar**, **TextField**, **UploadTile**, **WorldChip**, **WorldOption**, **WorldSign** and **WorldSigns**, **RadioCard**; `quiz/`: **LeaderboardRow**; `feedback/`: **SoundToggle**.
- `tokens/hud.css`: the styles behind the map's chrome (`.mp-hud`, `.mp-toolbar`, `.mp-next`, `.mp-dock`). They float over the window and size themselves to it.
- `tokens/viewer.css`: the styles behind the viewer (`.mp-viewer`, `.mp-cabinet`, `.mp-keys`, `.mp-knob`, `.mp-tray`). It sets sizes for phones, iPad and desktop.
- `tokens/ui.css`: the styles behind the small pieces (`.mp-heading`, `.mp-sticker`, `.mp-notice`, `.mp-error-text`, `.mp-save-pill`, `.mp-save-alert`, `.mp-avatar-button`, `.mp-seg`).
- `tokens/signs.css`: the styles behind the world signs (`.mp-gate`, `.mp-sign`, `.mp-world-pill`, `.mp-world-option`).
- `tokens/media.css`: the styles behind the media components (`.mp-words`, `.mp-album`, `.mp-cassette`, `.mp-film`, `.mp-shimmer`). They use container queries, so each piece fits the box it sits in.
- `tokens/worlds.css`, `tokens/gems.css`: world scopes and gem tones; iPad/phone layout tokens in `spacing.css`; memory/letter sizes in `typography.css`; focus ring + reduced motion in `utilities.css`; the night palette (`--night-*`, the summit letter and credits) and step-marker tokens (`--step-*`) in `colors.css`, with the `.mp-step` recipe in `utilities.css`.
- `guidelines/worlds.html`, `colors-gems.html`, `spacing-ipad.html`, `a11y.html`, `brand-anonymity.html`: project specimens.
- `ui_kits/lanre-game/`: interactive mobile game (`index.html`, `App.jsx`, `Hud.jsx`, `MapScreen.jsx`, `BoardScreen.jsx`, `CampScreen.jsx`, `Dialogs.jsx`, `README.md`). Playable in the docs at Playable kit, which copies it in with the files it loads.
- `tools/ds-loader.js`: preview loader: uses the compiled `_ds_bundle.js` when present, otherwise transpiles component sources in-browser. Cards and the UI kit load through it.
- `stories/`, `.storybook/`: Storybook workbench (`npm install`, then `npm run storybook`). Each component has a Playground plus stories ported from its preview card; `stories/patterns/` holds the multi-component demos (guess step, matching game, reveal, composer, settings, quiz result). Controls and prop docs are generated from each `Name.d.ts` by `.storybook/dts-argtypes.js`; usage notes come from `Name.prompt.md`. The World toolbar sets `data-world`; Surface changes the ground. Stories live outside `components/` so that folder stays a plain copyable source.
- `docs/`: Fumadocs handbook (`npm run docs`, port 3000). Foundations with specimens generated from `tokens/`, the Birthday Adventure rules, a page per component with a live example, its `Name.prompt.md` notes and a props table from its `Name.d.ts`, the playable kit, and a guide to using the system without a build. Tokens are scoped to `.lanre-preview` inside the docs so they can't clash with Tailwind's. See `docs/README.md`.
- `tools/read-props.js`: reads a component's props from its `.d.ts` and defaults from its `.jsx`. Storybook and the docs both use it, so they always agree.
- `package.json`: dev dependencies for Storybook and the `docs` workspace. The design system itself still needs no build.
- `assets/`: empty by design (see `assets/README.md`).
- `SKILL.md`: agent skill wrapper.

### Intentional additions
This is a from-scratch system (no source inventory), so the component set is the standard casual-game kit rather than a copy of any reference: HUD pills, bevelled buttons, level nodes, tiles, reward cells, panels, switches/sliders, badges/tags/toasts, outlined text and the icon wrapper.

### Caveats
- **Fonts** are loaded from Google Fonts (`tokens/fonts.css`), not shipped as files. Titan One and Quicksand are matches for the bubbly display / rounded UI faces seen in the references, not the exact typefaces those games use.
- **Icons** are Phosphor (CDN, or the `@phosphor-icons/web` package in an app) with a CSS outline treatment standing in for painted icon art.
- **Imagery**: the generic kit has no illustrations; its screens reserve striped placeholder slots. The Birthday Adventure's map scenery is drawn in code in the app (see **Scenery**).
- **Bundle**: `_ds_bundle.js` is generated by the compiler; until it exists, previews fall back to in-browser transpilation via `tools/ds-loader.js` (React 18 UMD + Babel standalone pinned to 7.26 for the classic JSX runtime).
- **Birthday app copy**: lanre-birthday keeps its own copy of `components/` in `src/design/lanre/`. This repo was last synced from it on 23 Oct 2026, so components carry `'use client'` and React 19 types and drop into Next.js unchanged. Fixes made in either copy need carrying across by hand. Exception: `worlds.js` blurbs stay generic here; the app's personal contributor prompts are not copied into this public repo.
- Isometric (diamond) boards from two references are not modelled; `Tile` is a top-down rounded square.
