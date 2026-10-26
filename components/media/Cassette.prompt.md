Cassette: a voice note. Give it an audio URL and it does the rest.

```jsx
<Cassette src={note.url} duration={note.seconds} heading="A voice note" hint="Tap play when you're ready" onError={refresh} onSound={play} />
<Cassette src={song.url} title="Song for you" heading="Listen" />
```

- Nothing plays until the play button is pressed. When it ends, it stays at the end, paused. The viewer taps Continue themselves.
- The reels and the wave move only while it plays. With reduced motion they stay still.
- `duration` shows until the file reports its own. Recordings made in a browser often report no length until they've been played through, and the seek bar waits for one.
- The seek bar is a real slider, so it works with a keyboard and a screen reader.
- Keep `title` neutral during a mystery, never the sender's name. A spoken name in the recording itself is the contributor's call.
- With no `src`, an `Unavailable` card shows instead.
