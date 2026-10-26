World sign: a big, friendly way to choose a world. Hang a column of them over a road with `WorldSigns`.

```jsx
<WorldSigns label="Where on the road">
  {worlds.map((w, i) => <WorldSign key={w} world={w} number={i + 1} selected={chosen === w} onClick={() => setChosen(w)} />)}
  <WorldSign locked name="The Summit" blurb="The author's letter" />
</WorldSigns>
```

- Exactly one sign is chosen at a time. A chosen sign glows teal and gets a tick. It reports as a pressed button.
- `number` puts a small marker at the top left, so the signs read in order along the road. Leave it out when order doesn't matter.
- `badge` hangs a small label off the bottom left. Use it to flag one sign, such as the world a friend's main memory is already in.
- A locked sign is for a world that can't be chosen. It's stone, shows a lock, and takes no presses.
- Pressing a sign moves it down, the same way every other pressable does.
