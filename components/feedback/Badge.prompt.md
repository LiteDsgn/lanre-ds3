Notification badge: red "!" or count pinned to the top-right corner of a button, tab or card (position it absolutely from the parent).

```jsx
<div style={{ position: 'relative' }}>
  <IconButton variant="primary" shape="square"><GameIcon kind="quest" outline={false} shadow={false} /></IconButton>
  <Badge count={3} style={{ position: 'absolute', top: -6, right: -6 }} />
</div>
<Badge />                       // "!"
<Badge count="NEW" tone="gold" size="sm" />
```
