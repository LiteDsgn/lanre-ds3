# Lanre: mobile game UI kit

Interactive recreation of the core surfaces of a casual exploration game, composed entirely from the design-system components (`components/**`) and tokens (`styles.css`). 390 × 844 design frame.

## Screens
- **World map** (`MapScreen.jsx`): scrolling meadow, winding trail (SVG stroke), `LevelNode` pucks (complete / current / locked), decorative bushes/rocks in CSS, a striped slot reserved for the hero illustration, side rails of captioned `IconButton`s, floating "Level N" play CTA.
- **Expedition board** (`BoardScreen.jsx`): ring of `Tile`s around a landmark slot, player token, coral roll button, energy pill, event progress. Rolling moves the token and fires `Toast`s.
- **Camp** (`CampScreen.jsx`): pond header, `x2 Boost` meter + `TimerChip`, 4×4 `ItemCell` grid with tap-to-select and merge, hatch CTA with coin cost.
- **Dialogs** (`Dialogs.jsx`): Level start (tab panel), Level complete (ribbon panel, animated stars), Daily reward (bush + wood panel, `RewardCard` grid), Shop (`ShopRow` list), Settings (`Switch`, `Slider`, language button).
- **Shell** (`App.jsx`, `Hud.jsx`): HUD strip, wood bottom bar with 4 captioned tabs, scrim, toast queue, fake state (wallet, progress, energy, streak).

## Try it
Tap a blue puck → Play → level complete. Tap the gift → claim days. Trail tab → GO. Camp tab → tap two matching items to merge. Gear → settings.

## How it loads
`index.html` links `../../styles.css`, loads React + Babel (pinned 7.x) and `tools/ds-loader.js`, which uses the compiled `_ds_bundle.js` when present and otherwise transpiles the component sources in-browser. Screens are plain JSX files registered on `window.Kit` (no import/export) so they are not bundled as components.
