import {
    open as openPopup,
    close as closePopup,
} from 'features/feature-stacklayout'
// import { userData } from '../lib/user-page-fixture'
// import UserPageUI from 'components/UserPageUI'
import UserPage from 'pages/Users/UserPage'

export default [
    // example
    // {
    //     type: '@open::users::user-page',
    //     handler: ({ userId }) => (dispatch, getState) => {
    //         dispatch(openPopup(UserPageUI, {
    //             onDismiss: closePopup,
    //             title: `User Details - id: ${userId}`,
    //             userId: userId,
    //             ...userData,
    //         }))
    //     },
    // },
    {
        type: '@open::users::user-page',
        handler: ({ userId }) => (dispatch, getState) => {
            dispatch(
                openPopup(UserPage, {
                    // modal props:
                    onDismiss: closePopup,
                    title: `User Details - id: ${userId}`,
                    // container props:
                    userId: userId,
                    // ...userData,
                })
            )
        },
    },
]
