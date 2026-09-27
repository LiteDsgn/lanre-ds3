import React from 'react';

// Phosphor FILL glyph with the painted game-icon treatment: solid fill, dark outline painted behind, 2px drop.
const TONES = {
  gold:  ['var(--gold-500)',  'var(--gold-900)'],
  coral: ['var(--coral-500)', 'var(--coral-900)'],
  blue:  ['var(--blue-500)',  'var(--blue-900)'],
  teal:  ['var(--teal-500)',  'var(--teal-900)'],
  green: ['var(--green-500)', 'var(--green-900)'],
  berry: ['var(--berry-500)', 'var(--berry-900)'],
  wood:  ['var(--wood-500)',  'var(--wood-900)'],
  stone: ['var(--stone-300)', 'var(--stone-700)'],
  white: ['#fff',             'var(--ink-900)'],
  ink:   ['var(--ink-900)',   'var(--ink-900)'],
};
// Semantic presets: glyph + tone
const KINDS = {
  coin: ['coin', 'gold'], coins: ['coins', 'gold'], gem: ['sketch-logo', 'blue'], ruby: ['sketch-logo', 'coral'],
  heart: ['heart', 'coral'], star: ['star', 'gold'], energy: ['lightning', 'teal'], key: ['key', 'gold'],
  gift: ['gift', 'berry'], chest: ['treasure-chest', 'wood'], trophy: ['trophy', 'gold'], crown: ['crown', 'gold'],
  lock: ['lock', 'stone'], clock: ['clock', 'white'], ticket: ['ticket', 'coral'], egg: ['egg', 'white'],
  map: ['map-trifold', 'wood'], compass: ['compass', 'blue'], flag: ['flag', 'coral'], leaf: ['leaf', 'green'],
  tent: ['tent', 'coral'], boat: ['boat', 'blue'], mountains: ['mountains', 'stone'], footprints: ['footprints', 'wood'],
  play: ['play', 'white'], check: ['check', 'white', 'bold'], x: ['x', 'white', 'bold'], plus: ['plus', 'white', 'bold'], gear: ['gear', 'white'],
  shop: ['storefront', 'coral'], trash: ['trash', 'stone'], sound: ['speaker-high', 'blue'], music: ['music-notes', 'blue'],
  vibrate: ['vibrate', 'blue'], bell: ['bell', 'gold'], backpack: ['backpack', 'wood'], fire: ['fire', 'coral'],
  binoculars: ['binoculars', 'wood'], sparkle: ['sparkle', 'gold'], quest: ['clipboard-text', 'coral'], spin: ['circle-half-tilt', 'berry'],
};

export function GameIcon({ kind, name, tone, size = 28, outline = true, shadow = true, weight, style, ...rest }) {
  const preset = KINDS[kind] || KINDS.coin;
  const glyph = name || preset[0];
  const w = weight || (name ? 'fill' : preset[2] || 'fill');
  const [fill, stroke] = TONES[tone || preset[1]] || TONES.gold;
  return (
    <span aria-hidden="true" style={{ display: 'inline-grid', placeItems: 'center', width: size, height: size, flex: 'none', lineHeight: 1,
      filter: shadow ? 'drop-shadow(0 ' + Math.max(1, Math.round(size * 0.07)) + 'px 0 oklch(0 0 0 / 0.25))' : 'none', ...style }} {...rest}>
      <i className={'ph-' + w + ' ph-' + glyph} style={{ fontSize: size, lineHeight: 1, color: fill, display: 'block',
        WebkitTextStroke: outline ? Math.max(1.5, size * 0.11) + 'px ' + stroke : '0', paintOrder: 'stroke fill' }} />
    </span>
  );
}
