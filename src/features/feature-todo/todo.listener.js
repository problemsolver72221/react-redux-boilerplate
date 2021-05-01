import { setSelectedTodo } from './todo.service'

export default [
    // example
    {
        type: '@open::todos::todo-details',
        handler: ({ todoId }) => (dispatch, getState) => {
            dispatch(setSelectedTodo(todoId))
        },
    },
]
