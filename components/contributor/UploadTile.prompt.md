Upload tile: the composer's media row (phone-first, 104px tiles, 12px gaps, horizontal scroll). Order in the row = order Babe sees.

```jsx
<UploadTile type="photo" state="done" thumb={url} name="beach.jpg" onRemove={remove} />
<UploadTile type="video" state="uploading" progress={0.42} onRemove={cancel} />
<UploadTile type="audio" state="error" onRetry={retry} onRemove={remove} />
<UploadTile type="photo" state="idle" onAdd={pick} />
```

- Filenames are shown to the contributor only; Babe's payload strips them (they can carry names).
- A package with any failed upload cannot be submitted, keep the error tile visible until fixed or removed.
