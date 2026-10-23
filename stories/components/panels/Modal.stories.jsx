import React, { useState } from 'react';
import { Modal } from '../../../components/panels/Modal';
import { Panel } from '../../../components/panels/Panel';
import { Button } from '../../../components/buttons/Button';
import { MemoryText } from '../../../components/media/MemoryText';
import argTypes from '../../../components/panels/Modal.d.ts?argtypes';
import notes from '../../../components/panels/Modal.prompt.md?raw';
import { Row } from '../../kit';

/* Every story starts closed, behind a button, so docs pages don't open a modal over themselves. */
function Opener({ text = 'Open modal', children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="confirm" typeface="ui" onClick={() => setOpen(true)}>{text}</Button>
      {open && children(() => setOpen(false))}
    </>
  );
}

export default {
  title: 'Components/Panels/Modal',
  component: Modal,
  argTypes,
  args: { label: 'Settings', tone: 'dim', closeOnScrim: false },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {
  render: args => (
    <Opener>
      {onClose => (
        <Modal {...args} onClose={onClose}>
          {close => (
            <Panel title={args.label} width={320} onClose={close} footer={<Button variant="confirm" onClick={close}>OK</Button>}>
              <div style={{ fontWeight: 600, color: 'var(--ink-700)', textAlign: 'center' }}>Escape, the ×, or OK closes it. Tab stays inside.</div>
            </Panel>
          )}
        </Modal>
      )}
    </Opener>
  ),
};

export const Tones = {
  render: () => (
    <Row>
      <Opener text="World note">
        {onClose => (
          <Modal label="A note from Henry" tone="world" world="small_chops" onClose={onClose}>
            {close => (
              <Panel title="A Note" accent="teal" width={340} onClose={close} footer={<Button variant="confirm" onClick={close}>OK</Button>}>
                <MemoryText size="sm" ornament={false}><p>Fixture note: Henry&apos;s real words go here.</p></MemoryText>
              </Panel>
            )}
          </Modal>
        )}
      </Opener>
      <Opener text="Summit (dusk)">
        {onClose => (
          <Modal label="The summit" tone="dusk" world="summit" onClose={onClose}>
            {close => <Panel title="The Summit" header="ribbon" width={320} onClose={close} footer={<Button onClick={close}>Read it</Button>}><div style={{ textAlign: 'center', fontWeight: 600, color: 'var(--ink-700)' }}>Fixture copy.</div></Panel>}
          </Modal>
        )}
      </Opener>
      <Opener text="Close on scrim">
        {onClose => (
          <Modal label="Tap outside" closeOnScrim onClose={onClose}>
            <Panel title="Tap Outside" width={300}><div style={{ textAlign: 'center', fontWeight: 600, color: 'var(--ink-700)' }}>Tapping the scrim closes this one.</div></Panel>
          </Modal>
        )}
      </Opener>
    </Row>
  ),
};
