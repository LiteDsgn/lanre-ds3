Sunburst: rays of light behind a focal point, inside an SVG.

```jsx
<svg viewBox="0 0 400 300">
  <Sunburst x={200} y={150} radius={260} rays={14} opacity={0.34} duration={90} />
  {/* the thing it sits behind */}
</svg>
```

- It is a `<g>`, not an element, so it only works inside an `<svg>`. Draw it first so the content sits on top.
- Keep `opacity` low (0.1 to 0.35). It is a glow, not a pattern.
- `motion="once"` plays a single fade for a reveal; `still` doesn't move. Reduced motion stops all of it.
