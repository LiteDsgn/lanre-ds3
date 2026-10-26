import * as React from 'react';

export interface RevealIdentity {
  name: string;
  /** e.g. "Sister", "Friend from uni". */
  relationship?: string;
  /** Portrait URL. The avatar is generated when there's none. */
  portrait?: string | null;
  /** Stable id for the generated avatar. */
  seed?: string;
  gem: 'amber' | 'emerald' | 'amethyst' | 'pearl';
  tier?: 1 | 2 | 3;
}

/**
 * The guess tray, centred over the viewer: a mystery face that flips to the friend and their gem. Before the reveal the body is yours (a prompt, choices, a way out). After it, the tray shows who it was from, a line, and your actions, arriving one after the other.
 * @startingPoint section="Viewer" subtitle="The guess tray, and the reveal" viewport="700x620"
 */
export interface RevealTrayProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** blue for a level, berry for a surprise beside the road, gold once it has been met. */
  tone?: 'blue' | 'berry' | 'gold';
  /** Flips the face to the friend and swaps the body. */
  revealed?: boolean;
  identity?: RevealIdentity;
  /** Shakes the tray once, for a wrong guess. */
  wobble?: boolean;
  /** No flip, no confetti, no "You found them!": everything sits still, for a memory already opened. */
  settled?: boolean;
  /** Fades the tray out before you remove it. */
  leaving?: boolean;
  /** Celebration over the tray, such as confetti. */
  celebrate?: React.ReactNode;
  /** Accessible name. Defaults to "Who sent this?" and, once revealed, "Who it was from". */
  label?: string;
  /** The line after the name, such as "You found them!". Hidden when settled. */
  message?: string;
  /** Buttons shown after the reveal. */
  actions?: React.ReactNode;
  /** An error shown at the bottom of the tray. */
  error?: string;
  /** Called when the dim area around the tray is pressed. */
  onBackdrop?: () => void;
  innerRef?: React.Ref<HTMLElement>;
  /** The body before the reveal. */
  children?: React.ReactNode;
}

export function RevealTray(props: RevealTrayProps): React.JSX.Element;

export function TrayPrompt(props: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element;
export function TrayHint(props: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element;
export function TrayChoices(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export function TrayClue(props: React.HTMLAttributes<HTMLDivElement> & { label?: string }): React.JSX.Element;
export function TrayLink(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { back?: boolean }): React.JSX.Element;
