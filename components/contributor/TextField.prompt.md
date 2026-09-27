Text field: contributor onboarding and the memory composer. Always a visible label; helper text explains what Babe will see.

```jsx
<TextField label="The name Lanre knows you by" value={name} onChange={setName} helper="Shown to her only after the reveal." />
<TextField label="Your memory" multiline rows={6} value={text} onChange={setText} maxLength={2000} />
<TextField label="Relationship" value={rel} onChange={setRel} error="Please add how you know her." />
```
