Error text: one line that says what went wrong and what to do.

```jsx
<ErrorText>{error}</ErrorText>
<ErrorText>That link has expired. Ask for a new one.</ErrorText>
```

- Always render it and pass the message, which may be empty: with nothing to say it disappears.
- Say how to fix it, not just what broke.
