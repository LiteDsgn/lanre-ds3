Modal shell: the behaviour around a Panel. It puts the panel over the scrim, closes on Escape, locks page scroll, keeps keyboard focus inside, gives focus back to whatever opened it, and fades out.

```jsx
{open && (
  <Modal label="Settings" onClose={() => setOpen(false)}>
    {close => <Panel title="Settings" onClose={close}>…rows…</Panel>}
  </Modal>
)}
<Modal label="A note from the author" world="small_chops" tone="world" onClose={closeNote}>
  {close => <Panel title="A Note" accent="teal" footer={<Button variant="confirm" onClick={close}>OK</Button>}>…</Panel>}
</Modal>
<Modal label="The summit" world="summit" tone="dusk" onClose={closeSummit}>…</Modal>
```

- Pass a function as the child and wire its `close` to the panel's close and footer buttons. `close` plays the exit fade, then calls `onClose`. Calling `onClose` yourself skips the fade.
- Always give a `label`. It's what screen readers announce.
- One panel per modal. Panels stay centred and never go edge to edge.
- The scrim is `--bg-scrim`, and it blurs the world behind it by `--scrim-blur`. Only the scrim blurs, never the panel. Use `tone="world"` with a `world` for world notes, and `tone="dusk"` for the summit. Both grounds are opaque, so they don't blur.
- Tapping the scrim does nothing unless you set `closeOnScrim`. The recipient’s sheets leave it off, so a stray tap on the iPad doesn't close a memory.
- Reduced motion closes straight away, with no fade.
