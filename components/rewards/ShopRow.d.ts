import * as React from 'react';

/**
 * Shop line item: prize glyph, title/subtitle, price button; optional corner Tag; featured tone for the hero offer.
 * @startingPoint section="Rewards" subtitle="Shop rows with price buttons + tags" viewport="700x300"
 */
export interface ShopRowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Price label for the built-in buy button, e.g. "USD 0.99" or a CurrencyPill. */
  price?: React.ReactNode;
  /** Corner label, e.g. <Tag>Most popular</Tag>. */
  tag?: React.ReactNode;
  /** featured = teal gradient hero row with a gold price button. */
  tone?: 'default' | 'featured';
  onBuy?: () => void;
  /** Replaces the built-in price button. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ShopRow(props: ShopRowProps): JSX.Element;
