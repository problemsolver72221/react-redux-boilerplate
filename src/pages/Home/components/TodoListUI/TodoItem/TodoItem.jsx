import React from 'react'
import PropTypes from 'prop-types'

import getStyles from './TodoItem.style'
const styles = getStyles()

const TodoItem = ({ todoId, description, onOpen }) => {
    return (
        <div style={styles.todoItem}>
            <p style={styles.todoText}>{description}</p>
            <div style={{ display: 'flex', height: 25 }}>
                <span style={styles.editBtn} onClick={() => onOpen(todoId)}>
                    Details
                </span>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todoId: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired,
}

export default TodoItem
