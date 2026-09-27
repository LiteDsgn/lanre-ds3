Radio card: wrap a group in role="radiogroup" with a visible question.

```jsx
<RadioCard checked={!reveals} onChange={() => setReveals(false)} icon={<Avatar mystery size={40} />} title="Keeps me a mystery" description="Nothing in this package shows my face, name or voice." />
<RadioCard checked={reveals} onChange={() => setReveals(true)} tone="gold" icon={<GameIcon kind="sparkle" size={36} />} title="Shows who I am" description="A face, signature or spoken name is in here, skip the guessing game for this one." />
```

- Never promise automatic anonymisation; the contributor's honest flag decides mystery vs direct reveal.
