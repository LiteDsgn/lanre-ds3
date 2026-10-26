import * as React from 'react';

/**
 * A round bevelled badge holding one white glyph, tinted from a colour family. Decorative, so pair it with words.
 * @startingPoint section="Feedback" subtitle="Round bevelled glyph badge in 7 tones" viewport="700x120"
 */
export interface StickerProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style' | 'children'> {
  /** A Phosphor icon name without the prefix, such as "heart" or "warning". */
  icon: string;
  tone?: 'blue' | 'teal' | 'gold' | 'coral' | 'berry' | 'green' | 'stone';
  weight?: 'fill' | 'bold';
  style?: React.CSSProperties;
}

export function Sticker(props: StickerProps): React.JSX.Element;
