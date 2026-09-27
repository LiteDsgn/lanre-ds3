import * as React from 'react';

/**
 * Reward calendar cell (Day N + prize) with claimed / available / locked states; featured renders a wide blue banner card.
 * @startingPoint section="Rewards" subtitle="Daily reward cells + featured day" viewport="700x260"
 */
export interface RewardCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  /** Strip label, e.g. "Day 3". */
  title: React.ReactNode;
  /** Prize glyph, e.g. <GameIcon kind="gem" size={40} />. */
  icon?: React.ReactNode;
  /** Prize amount text, e.g. "+50". */
  amount?: React.ReactNode;
  /** claimed = green overlay + check; available = gold glow, floating icon, tappable; locked = desaturated + lock. */
  state?: 'claimed' | 'available' | 'locked';
  /** Wide blue banner (the grand prize row). */
  featured?: boolean;
  /** Called when an available card is tapped. */
  onClick?: () => void;
  width?: number | string;
  style?: React.CSSProperties;
}

export function RewardCard(props: RewardCardProps): JSX.Element;
