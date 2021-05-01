### Modal styleguide component

```js
<Modal
  // toggle visibility:
  // isVisible
  header={'Hello World'}
  onDismiss={() => console.log("on dismiss")}
  leftBtnHandler={() => console.log('left btn handler')}
  content={
    <div
      style={{ width: '100%', height: '100%', padding: 15, background: "white", color: "black" }}
    >
      <p style={{ margin: 0 }}>hi</p>
    </div>
  }
/>
```
