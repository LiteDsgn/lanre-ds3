Film: a video on a strip of film. It fits the width of its box, which should be a size container, and keeps the video's own shape.

```jsx
<div style={{ position: 'relative', height: 480, containerType: 'size', display: 'grid', placeItems: 'center' }}>
  <Film src={clip.url} caption="The party" width={clip.width} height={clip.height} paused={sheetOpen} onError={refresh} />
</div>
```

- It uses the browser's own controls, so full screen, captions and the volume work the way people expect on their phone.
- It never autoplays and never loops. Pass `paused` when something opens on top of it.
- Until it loads, a shimmer holds its place. The first frame is painted instead of a black box.
- Pass `width` and `height` when you know them, so the film has the right shape before it loads. The video's own size wins once it has.
- Use a neutral caption, never the sender.
- With no `src`, an `Unavailable` card shows instead.
