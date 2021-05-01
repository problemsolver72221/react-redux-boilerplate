import todoReducer from './todo.reducer'
import * as todoService from './todo.service'
import todoListener from './todo.listener'

export const reducers = {
    todos: todoReducer,
}

export const services = [todoService]

export const listeners = [todoListener]
