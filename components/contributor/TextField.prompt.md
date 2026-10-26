Text field: contributor onboarding and the memory composer. Always a visible label; helper text explains what the recipient will see.

```jsx
<TextField label="The name the recipient knows you by" value={name} onChange={setName} helper="Shown only after the reveal." />
<TextField label="Your memory" multiline rows={6} value={text} onChange={setText} maxLength={2000} />
<TextField label="Relationship" value={rel} onChange={setRel} error="Please add how you know them." />
```
