### TodoListUI styleguide component

```js
<TodoListUI
    data={[
        {
            id: 1,
            title: 'Wake up',
        },
        {
            id: 2,
            title: 'Brush teeth',
        },
        {
            id: 3,
            title: 'Drink water',
        },
        {
            id: 6,
            title: 'Drink tea',
        },
    ]}
    onOpen={(todoId) => console.log('open todo details', todoId)}
/>
```
