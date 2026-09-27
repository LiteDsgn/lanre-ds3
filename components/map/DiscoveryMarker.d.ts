import * as React from 'react';

/**
 * Optional memory beside the road: a thematic object on a wooden pedestal (mango, rice bowl, flower, dumbbell, lantern, gift, letter). States: hidden (looks like a bush with a glint), available, new (late arrival), opened.
 * @startingPoint section="Map" subtitle="Discovery markers: hidden / available / new / opened" viewport="700x200"
 */
export interface DiscoveryMarkerProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  kind?: 'mango' | 'rice' | 'flower' | 'dumbbell' | 'lantern' | 'gift' | 'letter' | 'star';
  /** hidden = contributor asked for it to be tucked away (a glinting bush); available = glow + float; new = "New surprise" tag; opened = dim + tick. */
  state?: 'hidden' | 'available' | 'new' | 'opened';
  /** Outlined caption under the object. */
  label?: string;
  /** Object size in px. Default 64. */
  size?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function DiscoveryMarker(props: DiscoveryMarkerProps): JSX.Element;
