// keep image style types here

// Fallbacks:

import photoFallback from 'resources/images/fallback-types/photo-placeholder.png'
import profileFallback from 'resources/images/fallback-types/profile-placeholder.png'

export const imageStyleTypes = {
    homePage: {
        headImg: {
            width: 500,
            height: 250,
            borderRadius: 5,
        },
    },
    detailsModal: {
        profile: {
            width: 75,
            height: 75,
            minWidth: 75,
            maxWidth: 75,
            minHeight: 75,
            maxHeight: 75,
            borderRadius: '50%',
            border: '2px solid lightgrey',
            background: 'rgb(239, 241, 243)',
        },
    },
}

export const fallbackTypes = {
    homePage: {
        headImg: photoFallback,
    },
    detailsModal: {
        profile: profileFallback,
    },
}

// define page & elements that use fallbackGrey here
export const fallbackTypeGrey = [
    {
        page: 'examplePage',
        element: ['exampleElement'],
    },
]
