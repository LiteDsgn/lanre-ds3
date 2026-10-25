Radio card: a tall card for an honest either/or. Put two side by side in a radiogroup with a visible question.

```jsx
<div role="radiogroup" aria-label="Does this memory show who you are?" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-3)' }}>
  <RadioCard checked={!reveals} onChange={() => setReveals(false)} media={<Avatar mystery size={72} aria-hidden="true" />} title="Keeps me a mystery" description="No face, name or voice in here." />
  <RadioCard checked={reveals} onChange={() => setReveals(true)} media={<Avatar name="Ada Okafor" size={72} alt="" aria-hidden="true" />} title="Shows who I am" description="Skip the guessing for this one." />
</div>
```

- A chosen card turns teal with a glow, and its radio pops a tick. That's the system's "selected", so there's no tone to pick.
- Keep each description to a sentence or two, and keep the two cards about the same length.
- Never promise automatic anonymization. The contributor's honest answer decides mystery or direct reveal.
