import './styles.css'
import './fonts/montserrat/font-style.css'
import './fonts/flaticon/flaticon.css'

// COLORS

export const colors = {
    primaryBlue: '#007FFF',
    primaryRed: '#FF4642',
    greyLight: '#C4C4C4',
    greyDark: '#5C5C5C',
    defaultBoxShadow: '0px 0px 7px rgba(0, 0, 0, 0.15)',
}

// TYPOGRAPHY

// helper to handle fluid typography sizing
export const fluidResizer = (size) =>
    `calc(${size}px + (26 - ${size}) * ((100vw - 300px) / (1600 - 300)))`

// font sizes
export const typography = {
    tiny: `calc(${12}px + (26 - ${12}) * ((100vw - 300px) / (1600 - 300)))`,
    small: `calc(${14}px + (26 - ${14}) * ((100vw - 300px) / (1600 - 300)))`,
    medium: `calc(${20}px + (26 - ${20}) * ((100vw - 300px) / (1600 - 300)))`,
    big: `calc(${28}px + (26 - ${28}) * ((100vw - 300px) / (1600 - 300)))`,
    large: `calc(${40}px + (26 - ${40}) * ((100vw - 300px) / (1600 - 300)))`,
}
