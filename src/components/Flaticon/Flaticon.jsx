import React from 'react'
import PropTypes from 'prop-types'

const Flaticon = ({ type, style, onClick }) => (
    <i className={`flaticon-${type}`} style={style} onClick={onClick} />
)

Flaticon.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.any, // eslint-disable-line
    onClick: PropTypes.func,
}

Flaticon.defaultProps = {
    style: null,
    onClick: () => null,
}

export default Flaticon
