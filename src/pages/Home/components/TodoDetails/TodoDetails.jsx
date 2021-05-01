import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'components/Modal'

import getStyles from './TodoDetails.style'
const styles = getStyles()

const TodoDetails = ({ userId, id, title, completed, isVisible, onClose }) => {
    return (
        <Modal
            isVisible={isVisible}
            onDismiss={onClose}
            leftBtnHandler={onClose}
        >
            <div style={styles.wrapper}>
                <p>User Id: {userId}</p>
                <p>Post Id: {id}</p>
                <p>Title: {title}</p>
                <p>Completed: {completed}</p>
            </div>
        </Modal>
    )
}

TodoDetails.propTypes = {
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
    isVisible: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
}

TodoDetails.defaultProps = {
    userId: 0,
    postId: 0,
    title: 'Hello world!',
    completed: false,
    isVisible: false,
}

export default TodoDetails
