import React from 'react'
import PropTypes from 'prop-types'

import Flaticon from 'components/Flaticon'

import './ModalHeader.style.css'

const ModalHeader = ({
    title,
    leftComponent,
    leftBtnHandler,
    rightBtnComponent,
}) => (
    <div className="modal-header-navbar">
        <div className="modal-header-wrapper">
            <div className="modal-header-left-wrapper">
                {leftBtnHandler ? (
                    <div
                        className="modal-header-icon-wrapper"
                        onClick={leftBtnHandler}
                    >
                        <Flaticon
                            type={'cancel'}
                            style={{ fontSize: 28, lineHeight: 0 }}
                        />
                    </div>
                ) : null}
                {leftComponent ? leftComponent : null}
                {title ? <p className="modal-header-title">{title}</p> : null}
            </div>
            {rightBtnComponent ? rightBtnComponent : null}
        </div>
    </div>
)

ModalHeader.propTypes = {
    title: PropTypes.string,
    leftComponent: PropTypes.any,
    leftBtnHandler: PropTypes.func,
    rightBtnComponent: PropTypes.node,
}

ModalHeader.defaultProps = {
    title: '',
    leftBtnHandler: () => null,
    leftComponent: null,
    rightBtnComponent: <div />,
}

export default ModalHeader
