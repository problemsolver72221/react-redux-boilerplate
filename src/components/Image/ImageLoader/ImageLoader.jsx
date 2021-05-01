import React from 'react'
import PropTypes from 'prop-types'

import ContentLoader from 'react-content-loader'

import { imageLoaderTypes } from './image-loader-types'

import getStyles from './ImageLoader.style'
const styles = getStyles()

// HOW TO USE:
// page: pass the page of component as string
// element: pass the name of element as string

// utility helper to check if width or height passed as string (percentage)
const isString = (value) => typeof value === 'string'

const ImageLoader = ({ page, element }) => {
    const {
        width,
        height,
        backgroundColor,
        foregroundColor,
    } = imageLoaderTypes[page][element]

    return (
        <div style={styles.wrapper}>
            <ContentLoader
                style={imageLoaderTypes[page][element]}
                backgroundColor={backgroundColor || '#f5f6f7'}
                foregroundColor={foregroundColor || 'lightgrey'}
                width={width}
                height={height}
                speed={0.7}
            >
                <rect
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    width={isString(width) ? width : `${width}px`}
                    height={isString(height) ? height : `${height}px`}
                />
            </ContentLoader>
        </div>
    )
}

ImageLoader.propTypes = {
    page: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
}

export default ImageLoader
