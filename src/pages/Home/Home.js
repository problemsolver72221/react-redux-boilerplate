import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'

import {
    getTodos,
    paginateList,
    closeTodo,
} from 'features/feature-todo/todo.service'

import TodoListUI from './components/TodoListUI'
import TodoDetails from './components/TodoDetails'

const mapState = ({ todos }) => ({
    list: todos.list,
    limit: todos.limit,
    selectedTodo: todos.selectedTodo,
})

const mapDispatch = (dispatch) => ({
    getTodos: () => dispatch(getTodos()),
    paginateList: (amount) => dispatch(paginateList(amount)),
    openSelectedTodo: (todoId) =>
        dispatch({
            type: '@open::todos::todo-details',
            todoId: todoId,
        }),
    closeTodo: () => dispatch(closeTodo()),
})

const Home = ({
    list,
    limit,
    getTodos,
    selectedTodo,
    openSelectedTodo,
    closeTodo,
    paginateList,
}) => {
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() => {
        async function fetchTodos() {
            try {
                setLoading(true)
                await getTodos()
                setLoading(false)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchTodos()
        // eslint-disable-next-line
    }, [])

    const onPagination = () => {
        if (limit + 20 > list.length) return console.log('no more pagination')
        paginateList(limit + 20)
    }

    if (isError) return <p>Something went wrong</p>

    if (isLoading) return <p>Loading</p>

    return (
        <div>
            <TodoDetails
                isVisible={selectedTodo !== null}
                {...selectedTodo}
                onClose={closeTodo}
            />
            <div style={{ padding: '30px' }}>
                <h2>Todos</h2>
                <TodoListUI
                    data={list.slice(0, limit)}
                    onOpen={openSelectedTodo}
                />
                {!isLoading ? <Waypoint onEnter={onPagination} /> : null}
            </div>
        </div>
    )
}

Home.propTypes = {
    list: PropTypes.array,
    limit: PropTypes.number,
    selectedTodo: PropTypes.object,
    getTodos: PropTypes.func.isRequired,
    paginateList: PropTypes.func.isRequired,
    openSelectedTodo: PropTypes.func.isRequired,
    closeTodo: PropTypes.func.isRequired,
}

Home.defaultProps = {
    list: [],
    limit: 20,
    selectedTodo: null,
}

export default connect(mapState, mapDispatch)(Home)
