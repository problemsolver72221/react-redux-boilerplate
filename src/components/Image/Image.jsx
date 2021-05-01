import React, { useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

import ImageLoader from './ImageLoader'
import { imageStyleTypes, fallbackTypes } from './image-style-types'

const Image = ({ page, element, src, onClick, alt, wrapperStyle }) => {
    const [hasLoaded, setLoaded] = useState(false)
    const [failed, setFailed] = useState(false)

    // initialize ref with null using useRef()
    const imgRef = useRef(null)

    // onLoad handler
    const onLoad = useCallback(() => {
        setLoaded(true)
    }, [])

    // onError handler
    const onError = useCallback(() => {
        setFailed(true)
    }, [])

    const imgWrapper = wrapperStyle ? wrapperStyle : { display: 'flex' }

    if (!failed && src !== null) {
        return (
            <div>
                <div style={hasLoaded ? { display: 'none' } : imgWrapper}>
                    <ImageLoader page={page} element={element} />
                </div>
                <div style={!hasLoaded ? { display: 'none' } : imgWrapper}>
                    <img
                        ref={imgRef}
                        src={src}
                        alt={alt}
                        onLoad={onLoad}
                        onError={onError}
                        style={imageStyleTypes[page][element]}
                        onClick={onClick}
                    />
                </div>
            </div>
        )
    } else {
        // return fallback img
        return (
            <div style={imgWrapper}>
                <img
                    ref={imgRef}
                    src={fallbackTypes[page][element]}
                    alt={alt}
                    onError={onError}
                    style={imageStyleTypes[page][element]}
                    onClick={onClick}
                />
            </div>
        )
    }
}

Image.propTypes = {
    page: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    src: PropTypes.string,
    onClick: PropTypes.func,
    alt: PropTypes.string,
    // wrapperStyle can be used for passing wrapper styles
    // specifically when position absolute is needed with stacked elements
    wrapperStyle: PropTypes.object,
}

Image.defaultProps = {
    src: '',
    onClick: () => {},
    alt: '',
    wrapperStyle: null,
}

export default Image
