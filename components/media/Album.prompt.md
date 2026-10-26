Album: photos in a box, one at a time. Give it a positioned box with a size. It fills that box.

```jsx
<div style={{ position: 'relative', height: 520, containerType: 'size' }}>
  <Album photos={photos} index={at} onIndex={setAt} onError={refresh} onSound={play} />
</div>
```

- Each photo sits on a slightly tilted polaroid at its own shape, so tall screenshots and square pictures don't get cropped. Pass `width` and `height` when you know them. The file's own size wins once it loads.
- With more than one photo, a strip of thumbnails sits underneath. Arrows, the arrow keys and a swipe all page through. The next and previous photos load ahead of time.
- Tapping a photo opens it full screen in a lightbox. Escape closes the photo and not the sheet behind it.
- A photo shows a shimmer until it arrives, then fades in.
- Photos without a `src` are skipped. If none are left, an `Unavailable` card shows, and `onError` is its Try again.
- The lightbox is drawn on `document.body`. If your tokens are scoped to a wrapper, pass `lightboxRoot` so it gets them.
- Never auto-play or auto-advance. Paging is always the viewer's call.
- Use neutral captions, never the sender.
