Discovery marker: extra packages placed beside the road in their world; never on the numbered path and never a completion requirement.

```jsx
<DiscoveryMarker kind="mango" state="available" onClick={open} />
<DiscoveryMarker kind="gift" state="new" label="New" onClick={open} />     // arrived after the route was frozen
<DiscoveryMarker kind="rice" state="hidden" onClick={open} />              // contributor asked to hide it
<DiscoveryMarker kind="lantern" state="opened" />
```

- Pick the kind from the world (mango grove → mango; small chops → rice; good energy → dumbbell; japan → lantern/flower). gift for anything else.
- Keep markers 24px+ off the road so pucks stay the primary tap.
