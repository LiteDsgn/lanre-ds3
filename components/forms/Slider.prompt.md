Volume slider: music/SFX levels in Settings; also brightness or speed. Always pair with a leading GameIcon.

```jsx
<Slider value={music} onChange={setMusic} icon={<GameIcon kind="music" />} label="Music" />
<Slider value={70} tone="teal" icon={<GameIcon kind="sound" tone="teal" />} width={260} />
```
