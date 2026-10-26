import * as React from 'react';

/**
 * Soft rays of light that fan out from a point and turn slowly. SVG, so it goes inside an svg, behind the thing it lights.
 * @startingPoint section="Effects" subtitle="Turning rays of light, for SVG" viewport="700x320"
 */
export interface SunburstProps {
  /** Centre, in the svg's own units. Default 0, 0. */
  x?: number;
  y?: number;
  /** How far the rays reach. Default 500. */
  radius?: number;
  /** How many rays, 3 to 24. Default 12. */
  rays?: number;
  color?: string;
  /** Default 0.13: a faint glow. */
  opacity?: number;
  /** Seconds for one turn (continuous) or the whole fade (once). Default 120. */
  duration?: number;
  motion?: 'continuous' | 'once' | 'still';
}

export function Sunburst(props: SunburstProps): React.JSX.Element;
