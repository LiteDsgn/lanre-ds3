Upload tile: one block of a memory in the composer. Blocks stack in the contributor's order, and that's the order Babe sees them in.

```jsx
<ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
  <li><UploadTile type="text" index={0} count={3} onMoveUp={up} onMoveDown={down} onRemove={remove}>
    <TextField label={<span className="mp-sr">Text 1</span>} multiline rows={6} value={text} onChange={setText} />
  </UploadTile></li>
  <li><UploadTile type="photo" index={1} count={3} state="done" name="beach.jpg" details="2.4 MB" thumb={url} onMoveUp={up} onMoveDown={down} onRemove={remove}>
    <TextField label="Caption" optional value={caption} onChange={setCaption} />
  </UploadTile></li>
  <li><UploadTile type="video" index={2} count={3} state="uploading" progress={0.42} details="0:42 · 12.6 MB" onCancel={cancel} onMoveUp={up} onMoveDown={down} onRemove={remove} /></li>
</ol>
```

- Stack blocks 22px apart. Every block after the first draws a short stretch of road up to the one above.
- `state` covers every upload. `uploading` shows `progress`, and Cancel when you pass `onCancel`. Then `done`, `error` (pass the `reason` when there is one), `stalled` when it stopped before finishing, and `missing` when the file is gone.
- `error` and `missing` turn the block coral. Retry shows on `error` and `stalled` when you pass `onRetry`.
- A memory with a failed or missing upload can't be sent. Keep the block on screen until it's fixed or removed.
- Filenames only ever show to the contributor. Strip them from what Babe receives, since they can carry names.
- Add blocks with a row of square `IconButton`s under the list, one per kind.
