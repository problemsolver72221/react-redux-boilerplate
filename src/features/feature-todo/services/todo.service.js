import { runQuery } from '@forrestjs/feature-network'
import queries from './graphql'

import { setList } from '../reducers/users.reducer'

export const searchUsers = (input) => async (dispatch) => {
    const res = await dispatch(runQuery(queries.findProfiles, { input }))
    return res.data.session.dashboard.findProfile.items
}

export const setListType = (type, page = 0) => async (dispatch, getState) => {
    const filterType = type.toUpperCase()
    const { users } = getState()

    // basic cache for tab changes (tabs always starts at page 0)
    const current = [...users.list[type].items]
    const currentHasMore = users.list[type].hasMore

    // if initial fetch is there, do not re-fetch
    if (current.length > 0 && page === 0)
        return dispatch(setList(type, current, currentHasMore))

    try {
        // get userId list based on filter
        const res = await dispatch(
            runQuery(queries.getUsersList, { filter: filterType, page })
        )
        const { items, hasMore } = res.data.session.dashboard.getProfilesList
        const profiles = items.map((item) => item.id)

        // fetch users data
        const usersData = await dispatch(
            runQuery(queries.getUsersData, { profileIds: [...profiles] })
        )
        const usersDataList =
            usersData.data.session.dashboard.getProfilesData.items

        // merge lastActive key into final list & format location
        const finalize = usersDataList.map((item, index) => ({
            ...item,
            location:
                item.city && item.country
                    ? `${item.city}, ${item.country}`
                    : '-',
            lastActive: items[index].lastActive,
        }))

        // if profile data page length is less than 20,
        // return profiles without data having ids only

        if (finalize.length < 20) {
            // extract the profileIds doesn't return data
            const withData = finalize.map((item) => item.id)
            const withoutData = profiles.filter(
                (val) => !withData.includes(val)
            )

            // shape the dummy data structure identical
            const noDataProfiles = withoutData.map((item) => ({
                id: item,
                username: `id-${item}`,
                pic: '',
                email: '',
                fanbase: 0,
                connections: 0,
                channels: [],
                dateJoined: null,
                city: null,
                country: null,
                location: '-',
                lastActive: null,
            }))
            const mixedData = [...finalize, ...noDataProfiles]
            const updatedMix = [...current, ...mixedData]
            dispatch(setList(type, updatedMix, hasMore))
        } else {
            const updatedList = [...current, ...finalize]
            dispatch(setList(type, updatedList, hasMore))
        }
    } catch (err) {
        console.log(err.message)
    }
}
