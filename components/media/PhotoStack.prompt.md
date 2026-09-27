Photo stack: several photos in one package, in the contributor's order.

```jsx
<PhotoStack photos={item.photos.map(p => ({ src: p.url, alt: p.alt, caption: p.caption }))} height={360} />
```

- fit="contain" by default so nothing is cropped; no slideshow timer.
- Alt text comes from captions or a neutral "Photo n", never from filenames (they can carry names).
