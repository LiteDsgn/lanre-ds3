import * as React from 'react';

/**
 * A memory in a wooden cabinet over the map. A sign on top names the level, and a screen plays one piece of the memory at a time, with a deck underneath of keys and one big button. While it loads, the cabinet is already in place with its screen warming up. Fill the slots with ViewerKeys, ViewerKnob, WhoButton, ClueTab and ClueCard, and open a RevealTray over it.
 * @startingPoint section="Viewer" subtitle="The roadside viewer: sign, screen and deck" viewport="700x760"
 */
export interface RoadsideViewerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** World id for data-world, so the cabinet's sheet takes that world's colours. */
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan';
  kind?: 'level' | 'discovery';
  /** Small line on the sign, usually the world's name. */
  signEyebrow?: string;
  /** Big line on the sign, such as "Level 4". */
  signTitle?: string;
  /** id of the sign's heading, which names the dialog. Default "memory-title". */
  titleId?: string;
  /** Leaves on the sign, for a surprise beside the road. */
  leafy?: boolean;
  /** A berry ribbon over the top, such as "Just arrived". */
  ribbon?: string;
  onClose?: () => void;
  /** Accessible name of the close button. Default "Back to the map". */
  closeLabel?: string;
  /** Small line above the title, such as "2 of 3 · Photo". */
  eyebrow?: string;
  /** The memory's own title. */
  title?: string;
  /** The cabinet is in place with the screen off and "Tuning in". */
  loading?: boolean;
  /** Shows the screen off with this message and a retry button. */
  error?: string;
  onRetry?: () => void;
  retryLabel?: string;
  loadingLabel?: string;
  /** Plays the leaving animation. */
  closing?: boolean;
  /** Sits inside a positioned box instead of covering the window. */
  contained?: boolean;
  titleRef?: React.Ref<HTMLHeadingElement>;
  /** A WhoButton. */
  who?: React.ReactNode;
  /** A ClueTab. */
  clue?: React.ReactNode;
  /** A ClueCard, shown over the screen. */
  clueCard?: React.ReactNode;
  /** A ViewerKeys. */
  keys?: React.ReactNode;
  /** A ViewerKnob. */
  knob?: React.ReactNode;
  /** Changes when the piece on screen changes, so the new piece arrives with its own entrance. */
  pieceKey?: React.Key;
  /** An error shown under the cabinet. */
  message?: string;
  /** Layers over the cabinet, such as a RevealTray. */
  layers?: React.ReactNode;
  /** What's on the screen: Words, an Album, a Cassette or a Film. */
  children?: React.ReactNode;
}

export function RoadsideViewer(props: RoadsideViewerProps): React.JSX.Element;
