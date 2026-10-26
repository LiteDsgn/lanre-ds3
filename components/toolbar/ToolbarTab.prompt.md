Toolbar tab: a quiet button for something the player may want any time.

```jsx
<ToolbarTab icon="users-three" label="Your people" onClick={openPeople} />
<ToolbarTab icon="list" weight="bold" label="Menu" onClick={openMenu} />
```

- Keep labels to one or two words. Use a shorter one on phones, such as "People".
- Pressing it dips it down and tints it, the same way every other pressable moves.
