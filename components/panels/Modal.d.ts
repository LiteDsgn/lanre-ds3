import * as React from 'react';

/**
 * Modal shell: puts a Panel over the scrim, closes on Escape, locks page scroll, keeps keyboard focus inside and hands it back on close, and leaves with a short fade.
 * @startingPoint section="Panels" subtitle="Modal shell for panels over the scrim" viewport="700x420"
 */
export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  /** Accessible name for the dialog, usually the panel title. */
  label: string;
  /** Called once the exit fade has finished. Unmount the modal here. */
  onClose: () => void;
  /** dim = the scrim over the world, blurred by --scrim-blur (default), dusk = the evening ground, world = the ground of `world`. */
  tone?: 'dim' | 'dusk' | 'world';
  /** World id for data-world, so the panel and a world tone pick up that world's colours. */
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan' | 'summit';
  /** Close when the scrim around the panel is tapped. Default false. */
  closeOnScrim?: boolean;
  /** Stacking order. Default 45. */
  zIndex?: number;
  /** The panel. Pass a function to get `close`, which plays the exit fade before calling onClose. */
  children?: React.ReactNode | ((close: () => void) => React.ReactNode);
  style?: React.CSSProperties;
}

export function Modal(props: ModalProps): React.JSX.Element;
