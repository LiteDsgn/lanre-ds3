import * as React from 'react';

/**
 * Card-sized radio option with title, description and glyph, for honest either/or questions such as identity suitability.
 * @startingPoint section="Contributor" subtitle="Radio cards (identity suitability)" viewport="700x200"
 */
export interface RadioCardProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'style' | 'onChange' | 'title'> {
  checked?: boolean;
  onChange?: (checked: true) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: 'teal' | 'blue' | 'gold' | 'coral' | 'berry';
  style?: React.CSSProperties;
}

export function RadioCard(props: RadioCardProps): JSX.Element;
