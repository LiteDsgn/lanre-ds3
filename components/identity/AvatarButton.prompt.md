Avatar button: the person's own face, pressed to edit their profile.

```jsx
<AvatarButton name={me.displayName} seed={me.id} src={portraitUrl} onClick={() => go('you')} />
```

- Use it only for the person's own avatar, where pressing it changes something. Anyone else's portrait is a plain `Avatar`.
- The label says what pressing does, not who it is.
