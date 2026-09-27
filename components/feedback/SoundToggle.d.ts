import * as React from 'react';

/**
 * Sound on/off pill with glyph AND text, so the state never relies on colour. Lives on the opening screen and in the HUD.
 * @startingPoint section="Feedback" subtitle="Sound on / off control" viewport="700x100"
 */
export interface SoundToggleProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'style'> {
  on?: boolean;
  onChange?: (on: boolean) => void;
  /** dark over the world (default) · light inside panels. */
  tone?: 'dark' | 'light';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function SoundToggle(props: SoundToggleProps): JSX.Element;
