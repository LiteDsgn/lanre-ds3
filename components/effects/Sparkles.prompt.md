Sparkles: twinkles around a panel that is being celebrated.

```jsx
<div style={{ position: 'relative' }}>
  <Sparkles />
  <Notice tone="gold" icon="gift">Everything is in.</Notice>
</div>
```

- It places itself over its nearest positioned parent, so give the parent `position: relative` and a little room around it.
- Decorative: it is hidden from screen readers and has no props.
