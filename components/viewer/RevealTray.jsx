'use client';
import React from 'react';
import { Avatar } from '../identity/Avatar';
import { Gemstone } from '../identity/Gemstone';

/* Small pieces for the tray's body, before the reveal. */
export const TrayPrompt = ({ children, ...rest }) => <p className="mp-tray-prompt" {...rest}>{children}</p>;
export const TrayHint = ({ children, ...rest }) => <p className="mp-tray-hint" {...rest}>{children}</p>;
export const TrayChoices = ({ children, ...rest }) => <div className="mp-tray-choices" {...rest}>{children}</div>;
export const TrayClue = ({ label = 'Their clue', children, ...rest }) => (
  <div className="mp-tray-clue" {...rest}><span className="mp-clue-tape" aria-hidden="true" /><span className="mp-viewer-label">{label}</span>{children}</div>
);
export const TrayLink = ({ back = false, children, ...rest }) => <button type="button" className={'mp-tray-link' + (back ? ' mp-tray-back' : '')} {...rest}>{children}</button>;

/* The guess tray, centred over the viewer. A mystery face on top flips over to the friend and their gem. Before the
   reveal the body is yours (a prompt, choices, a way out). After it, the tray shows who it was from, then a line and
   your actions, one after the other. Render it only while it's open; set `leaving` to fade it out before you remove it. */
export function RevealTray({ tone = 'blue', revealed = false, identity, wobble = false, settled = false, leaving = false, celebrate, label, message, actions, error, onBackdrop, innerRef, children, ...rest }) {
  return (
    <div className={'mp-tray-layer' + (leaving ? ' mp-tray-layer-leaving' : '')} onClick={e => { if (onBackdrop && e.target === e.currentTarget) onBackdrop(); }}>
      {/* The entrance lives on this wrapper, so a wrong-guess wobble on the tray never replays it. */}
      <div className={'mp-tray-in' + (leaving ? ' mp-tray-in-leaving' : '')}>
        <aside ref={innerRef} tabIndex={-1} className={'mp-tray mp-tray-' + tone + (wobble ? ' mp-tray-wobble' : '') + (settled ? ' mp-tray-settled' : '')} aria-live="polite"
          aria-label={label || (revealed ? 'Who it was from' : 'Who sent this?')} {...rest}>
          <div className="mp-tray-face">
            <span className={'mp-tray-flip' + (revealed ? ' mp-tray-flipped' : '')}>
              <span className="mp-tray-face-front"><Avatar mystery size={104} /></span>
              <span className="mp-tray-face-back">
                {revealed && identity && (
                  <>
                    <Avatar name={identity.name} seed={identity.seed} src={identity.portrait || undefined} size={104} alt="" />
                    <Gemstone gem={identity.gem} tier={identity.tier ?? 1} size={44} decorative className="mp-tray-gem" />
                  </>
                )}
              </span>
            </span>
          </div>
          {celebrate}
          <div className="mp-tray-body">
            {!revealed && children}
            {revealed && identity && (
              <>
                <div className="mp-tray-whowas">
                  <span className="mp-viewer-label mp-beat-1">From</span>
                  <span className="mp-tray-name mp-beat-1">{identity.name}</span>
                  {identity.relationship && <span className="mp-tray-relationship mp-beat-2">{identity.relationship}</span>}
                </div>
                {message && !settled && <p className="mp-tray-prompt mp-beat-3">{message}</p>}
                {actions && <div className="mp-tray-actions mp-beat-4">{actions}</div>}
              </>
            )}
            {error && <p role="alert" className="mp-viewer-error">{error}</p>}
          </div>
        </aside>
      </div>
    </div>
  );
}
