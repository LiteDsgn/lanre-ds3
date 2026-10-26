Step bar: the top of every contributor screen, in the HUD between the back button and the right-hand slot. It reads like the map, with step markers on a short stretch of road that fills green as steps finish.

```jsx
<StepBar steps={['You', 'Memories', 'Preview', 'Submit']} current={1} />
<StepBar steps={['Where', 'Who', 'Write', 'Details']} current={2} labels />
```

- Use the plain bar for the main road, and `labels` for the steps inside one memory.
- Without `labels`, each step is still read out, as "Step 2 of 4: Memories".
- A step forward celebrates. The green grows to the new marker and the finished one pops. It only happens when the bar mounts one step further on than it was last seen on that page load, so going back or reloading stays calm.
- The markers aren't buttons. Going back is the back button's job.
- It takes its road colours from the world, so put it inside a `data-world`.
