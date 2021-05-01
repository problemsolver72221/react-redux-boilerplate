import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

import getStyles from './TodoListUI.style'
const styles = getStyles()

const TodoListUI = ({ data, onOpen }) => {
    if (data.length === 0) {
        return (
            <div style={styles.wrapper}>
                <p style={{ margin: 0 }}>List is empty, add some todos!</p>
            </div>
        )
    }
    return (
        <div style={styles.wrapper}>
            {data.map((item, index) => (
                <div key={index}>
                    <TodoItem
                        todoId={item.id}
                        description={item.title}
                        onOpen={() => onOpen(item.id)}
                    />
                </div>
            ))}
        </div>
    )
}

TodoListUI.propTypes = {
    data: PropTypes.array,
    onOpen: PropTypes.func,
}

TodoListUI.defaultProps = {
    data: [],
    onOpen: (id) => console.log('open it', id),
}

export default TodoListUI
