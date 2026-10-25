import * as React from 'react';

/**
 * Tall, card-sized radio option: media on top, then a title and a short description, with the radio in the top-right corner. Teal with a glow when chosen.
 * @startingPoint section="Contributor" subtitle="Radio cards for an honest either/or" viewport="700x300"
 */
export interface RadioCardProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'style' | 'onChange' | 'title'> {
  checked?: boolean;
  onChange?: (checked: true) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Shown above the title, usually a 72px Avatar. */
  media?: React.ReactNode;
  style?: React.CSSProperties;
}

export function RadioCard(props: RadioCardProps): React.JSX.Element;
