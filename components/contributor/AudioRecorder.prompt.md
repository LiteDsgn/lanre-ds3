Audio recorder: record a voice note in the browser, listen back, then use or discard it.

```jsx
<AudioRecorder
  prompt="Record a voice note. It will be played as it is."
  onDone={file => addBlock(file)}
  onCancel={() => setRecording(false)} />
```

- Nothing is uploaded here. `onDone` hands back the take (`blob`, `mimeType`, `filename`, `durationSeconds`) and the app decides what to do with it.
- The microphone is only asked for when Record is pressed. If it's blocked, the panel says so and points to uploading a file instead.
- It picks the best format the browser can record (m4a, then webm, then ogg) and stops by itself at `maxSeconds`.
- Tell people in `prompt` anything they should know before recording, such as that their voice may be recognised.
