import * as React from 'react';

/**
 * Friend-facing leaderboard row: rank (ties share, shown as "=3"), avatar, name, gem + tier text, score. Skipped quiz = pearl, unranked, no score.
 * @startingPoint section="Quiz" subtitle="Ranked rows, ties, you, skipped" viewport="700x300"
 */
export interface LeaderboardRowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  rank?: number;
  /** Shares rank with neighbours → renders "=N". */
  tied?: boolean;
  name: string;
  seed?: string;
  portrait?: string;
  gem?: 'amber' | 'emerald' | 'amethyst' | 'pearl';
  tier?: 1 | 2 | 3;
  score?: number;
  /** Default 8. */
  total?: number;
  /** Highlights the viewer's own row. */
  me?: boolean;
  /** Quiz skipped: pearl keepsake, "-" rank, no score. */
  skipped?: boolean;
  style?: React.CSSProperties;
}

export function LeaderboardRow(props: LeaderboardRowProps): JSX.Element;
