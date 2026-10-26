Recorder panel: the card a voice recorder lives in, drawing one step at a time.

```jsx
<RecorderPanel phase="idle" prompt="Record a voice note." onRecord={start} onCancel={close} />
<RecorderPanel phase="recording" seconds={42} onStop={stop} />
<RecorderPanel phase="review" url={takeUrl} onRedo={redo} onUse={use} onCancel={close} />
```

- It only draws a state. For a working recorder that asks for the microphone, use `AudioRecorder`, which is this panel plus the recording.
- Cancel shows in the idle and review steps, but not while recording, so a take isn't thrown away by a stray tap.
- Set `supported={false}` where the browser has no recorder, to point people to uploading a file instead.
