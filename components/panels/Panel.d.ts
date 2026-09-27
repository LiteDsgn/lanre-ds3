import * as React from 'react';

/**
 * Modal card with a chunky game header straddling its top edge, banner plate, celebration ribbon (tails + stars) or wooden sign (nails + leaves): bevelled body, optional close button + footer.
 * @startingPoint section="Panels" subtitle="Dialog card with banner, ribbon or sign header" viewport="700x440"
 */
export interface PanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  title?: React.ReactNode;
  /** Small cream pill sitting on top of the plate, e.g. "Level 23". */
  eyebrow?: React.ReactNode;
  /** banner = tinted plate (settings, shop, level, reveal); ribbon = gold plate with folded tails + stars (level complete); sign = wooden plank with leaves (daily reward, world events); none. 'tab' and 'bush' are accepted as aliases. */
  header?: 'banner' | 'ribbon' | 'sign' | 'none' | 'tab' | 'bush';
  /** Banner colour. Default blue (gold for ribbon). Use teal for Babe's continue/confirm dialogs. */
  accent?: 'blue' | 'gold' | 'teal' | 'green' | 'berry' | 'coral';
  /** cream (default parchment), wood (plank body, thick brown border), sky (white → pale blue). */
  tone?: 'cream' | 'wood' | 'sky';
  /** Renders the coral × button on the top-right corner. */
  onClose?: () => void;
  /** Default 340 (mobile panel). */
  width?: number | string;
  /** Body padding. Default 20. */
  padding?: number;
  children?: React.ReactNode;
  /** Centered button row at the bottom. */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Panel(props: PanelProps): JSX.Element;
