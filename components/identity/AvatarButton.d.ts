import * as React from 'react';

/**
 * The person's own avatar as a 48px button with a small pencil badge, for opening the page where they change their name and photo.
 * @startingPoint section="Identity" subtitle="Own avatar with a pencil badge" viewport="700x120"
 */
export interface AvatarButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Display name, for the generated avatar's initials. */
  name?: string;
  /** Stable id for the generated look. */
  seed?: string;
  /** Portrait URL. */
  src?: string;
  /** Accessible name. Default "Edit your name and photo". */
  label?: string;
  onClick?: () => void;
}

export function AvatarButton(props: AvatarButtonProps): React.JSX.Element;
