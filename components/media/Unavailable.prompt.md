Unavailable card: what shows when a photo, video or voice note didn't load. The media components use it on their own when they have no source, and you can use it anywhere media can fail.

```jsx
<Unavailable what="photo" onRetry={refresh} />
<Unavailable what="set of photos" onRetry={refresh} />
```

- Say what failed in a word or two. It reads "This photo didn't load." with a Try again button.
- `onRetry` is where you fetch a fresh link. Links to private media often expire.
- It's a flat cream card, not an error. Nothing here has gone wrong for the player, so keep the wording calm.
