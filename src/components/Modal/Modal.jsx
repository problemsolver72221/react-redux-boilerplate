import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import ModalHeader from './ModalHeader'

import './Modal.style.css'

const Modal = ({
    isVisible,
    header,
    leftBtnHandler,
    leftComponent,
    rightBtnComponent,
    onDismiss,
    noHeader,
    children,
}) => {
    if (!isVisible) {
        document.body.style.overflow = 'unset'
        return null
    }

    // eslint-disable-next-line
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'relative' //iPhone fix
        }
    }, []) // eslint-disable-line

    return (
        <div>
            <div className="modal-wrapper" onClick={onDismiss} />
            <div className="modal-inner-wrapper">
                {!noHeader ? (
                    <ModalHeader
                        title={header}
                        leftBtnHandler={leftBtnHandler}
                        leftComponent={leftComponent}
                        rightBtnComponent={rightBtnComponent}
                    />
                ) : null}
                <div className="modal-content-wrapper">{children}</div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.any.isRequired, // eslint-disable-line
    header: PropTypes.string,
    leftBtnHandler: PropTypes.func,
    leftComponent: PropTypes.any,
    rightBtnComponent: PropTypes.any,
    onDismiss: PropTypes.func,
    noHeader: PropTypes.bool,
}

Modal.defaultProps = {
    isVisible: false,
    header: null,
    leftBtnHandler: () => null,
    leftComponent: null,
    rightBtnComponent: null,
    onDismiss: () => null,
    noHeader: false,
}

export default Modal
