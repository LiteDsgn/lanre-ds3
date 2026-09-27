import * as React from 'react';

/**
 * Quiz gemstone: colour + distinct cut per gem (amber hexagon, emerald octagon, amethyst kite, pearl round), tier I plain / II sparkle / III halo.
 * @startingPoint section="Identity" subtitle="Amber / Emerald / Amethyst × tiers, Pearl keepsake" viewport="700x220"
 */
export interface GemstoneProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** amber = score 0–2, emerald = 3–5, amethyst = 6–8, pearl = quiz skipped (unranked keepsake). */
  gem?: 'amber' | 'emerald' | 'amethyst' | 'pearl';
  /** 1 plain · 2 sparkle · 3 halo. Ignored for pearl. */
  tier?: 1 | 2 | 3;
  /** Box size in px. Default 64. Halo extends ~20% beyond. */
  size?: number;
  /** Accessible name override (default "Emerald, tier II" / "Pearl keepsake"). */
  label?: string;
  /** Visual only, with no visible or accessible label. Defaults to !showTier. Use true on Babe’s surfaces. */
  decorative?: boolean;
  /** Prints "Emerald II" / "Keepsake" under the stone: FRIEND-FACING ONLY; never on Babe's reveal card or collection. */
  showTier?: boolean;
  /** Sparkle/halo animation (default true; static in dense lists). */
  animate?: boolean;
  style?: React.CSSProperties;
}

export function Gemstone(props: GemstoneProps): JSX.Element;
/** Maps a 0–8 quiz score (or null for skipped) to { gem, tier }. */
export function gemForScore(score: number | null | undefined): { gem: 'amber' | 'emerald' | 'amethyst' | 'pearl'; tier: 0 | 1 | 2 | 3 };
export const GEM_NAMES: Record<'amber' | 'emerald' | 'amethyst' | 'pearl', string>;
