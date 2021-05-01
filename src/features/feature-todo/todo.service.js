import axios from 'axios'
import { setList, setLimit, setSelected } from './todo.reducer'

const baseUrl = process.env.REACT_APP_API_URL

export const getTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${baseUrl}/todos`)
        dispatch(setList(res.data))
    } catch (err) {
        console.log('err?', err)
    }
}

export const paginateList = (amount) => (dispatch) => {
    dispatch(setLimit(amount))
}

export const setSelectedTodo = (todoId) => (dispatch, getState) => {
    const { todos } = getState()
    const selected = todos.list.filter((item) => item.id === todoId)[0]
    dispatch(setSelected(selected))
}

export const closeTodo = () => (dispatch) => dispatch(setSelected(null))
