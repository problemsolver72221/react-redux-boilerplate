// keep image loader style types here

// NOTE: allowed props for loader are: width, height, border, borderRadius, filter (blur)
// position or margin / padding related props should not be here

export const imageLoaderTypes = {
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
