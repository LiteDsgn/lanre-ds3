Loading screen: what shows while the app gets ready.

```jsx
if (!session) return <LoadingScreen title="The Birthday Adventure" />;
```

- It fills the window (`min-height: 100dvh`), so render it instead of the screen, not inside it. In a smaller box, give it a height.
- Pass the app's name as `title`. Without one, the bar and label still show.
- The bar and clouds keep moving until the screen is replaced, and stop for reduced motion.
