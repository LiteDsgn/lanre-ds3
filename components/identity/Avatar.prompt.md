Avatar: every person in the adventure. Portrait if provided; otherwise a generated avatar (never a grey silhouette); mystery when unrevealed.

```jsx
<Avatar name="Ada Okafor" seed="c_01" size={96} />           // generated: hue + pattern from seed, initials AO
<Avatar name="Ada Okafor" src={portraitUrl} size={96} />     // real portrait
<Avatar mystery size={96} />                                  // unrevealed: no name, no seed, no src
```

- Pass the contributor id as seed so the generated look is stable across screens and sessions.
- For unrevealed people render mystery and do NOT pass name/seed/src, the component ignores them, but the payload must not contain them either.
- Portraits are optional and never a prerequisite for guessing.
