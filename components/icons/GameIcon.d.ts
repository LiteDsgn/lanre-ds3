import * as React from 'react';

/**
 * Painted-style glyph: a Phosphor FILL icon with solid tone, dark outline behind the fill and a hard 2px drop.
 * @startingPoint section="Icons" subtitle="Currency + world glyphs with outline treatment" viewport="700x220"
 */
export interface GameIconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Semantic preset choosing glyph + tone: coin, coins, gem, ruby, heart, star, energy, key, gift, chest, trophy, crown, lock, clock, ticket, egg, map, compass, flag, leaf, tent, boat, mountains, footprints, play, check, x, plus, gear, shop, trash, sound, music, vibrate, bell, backpack, fire, binoculars, sparkle, quest, spin. */
  kind?: 'coin' | 'coins' | 'gem' | 'ruby' | 'heart' | 'star' | 'energy' | 'key' | 'gift' | 'chest' | 'trophy' | 'crown' | 'lock' | 'clock' | 'ticket' | 'egg' | 'map' | 'compass' | 'flag' | 'leaf' | 'tent' | 'boat' | 'mountains' | 'footprints' | 'play' | 'check' | 'x' | 'plus' | 'gear' | 'shop' | 'trash' | 'sound' | 'music' | 'vibrate' | 'bell' | 'backpack' | 'fire' | 'binoculars' | 'sparkle' | 'quest' | 'spin';
  /** Any Phosphor icon name (without the ph- prefix): overrides the preset glyph. */
  name?: string;
  /** Overrides the preset tone. */
  tone?: 'gold' | 'coral' | 'blue' | 'teal' | 'green' | 'berry' | 'wood' | 'stone' | 'white' | 'ink';
  /** Box size in px (glyph fills it). Default 28. */
  size?: number;
  /** Dark outline behind the fill. Default true. */
  outline?: boolean;
  /** Hard drop shadow. Default true. */
  shadow?: boolean;
  /** Phosphor weight. fill (default) for pictorial glyphs; bold for utility strokes (plus, x, check, carets). */
  weight?: 'fill' | 'bold';
  style?: React.CSSProperties;
}

export function GameIcon(props: GameIconProps): JSX.Element;
