import * as React from 'react';

/**
 * Identity reveal: a mystery face (neutral avatar, optional clue) that flips to the sender, portrait/name/relationship + gemstone visual, never score/rank/tier text.
 * @startingPoint section="Identity" subtitle="Mystery → sender flip card" viewport="700x360"
 */
export interface RevealCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** false = mystery face; true = flips to the sender. */
  revealed?: boolean;
  name?: string;
  /** e.g. "Sister", "Colleague", "Friend from uni". */
  relationship?: string;
  /** Portrait URL (optional; Avatar generates one otherwise). */
  portrait?: string;
  /** Stable id for the generated avatar. */
  seed?: string;
  gem?: 'amber' | 'emerald' | 'amethyst' | 'pearl';
  tier?: 1 | 2 | 3;
  /** Optional contributor-written clue shown on the mystery face. */
  clue?: string;
  /** Card width in px (height ≈ 1.24×). Default 250. */
  width?: number;
  /** Makes the gem tappable (explanatory sheet). */
  onGemTap?: () => void;
  style?: React.CSSProperties;
}

export function RevealCard(props: RevealCardProps): JSX.Element;
