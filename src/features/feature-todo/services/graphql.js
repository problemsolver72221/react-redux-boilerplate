export default {
    getUsersList: `
        query getUsersList(
            $filter: SessionDashboardQuery_getUsersList_filterArg,
            $page: Int
        ) {
            session {
                dashboard {
                    getProfilesList (filter: $filter, page: $page) {
                        items {
                            id
                            lastActive
                        }
                        hasMore
                    }
                }
            }
        }
    `,
    getUsersData: `
        query getUsersData($profileIds: [ID]!) {
            session {
                dashboard {
                    getProfilesData (profileIds: $profileIds) {
                        items {
                            id
                            username
                            pic
                            email
                            fanbase
                            connections
                            channels {
                                id
                                vendor
                                isActive
                            }
                            dateJoined
                            city
                            country
                        }
                    }
                }
            }
        }
    `,
    getSingleUserData: `
        query getProfileData ($profileId: ID) {
            session {
                dashboard {
                    getSingleProfileData (profileId: $profileId)
                }
            }
        }
    `,
    findProfiles: `
        query findProfile ($input: String) {
            session {
                dashboard {
                    findProfile (input: $input) {
                        items {
                            id
                            username
                            pic
                            fanbase
                            email
                        }
                    }
                }
            }
        }
    `,
    updateUserGrants: `
        mutation updateUserGrants ($profileId: ID!, $grants: [String!]!) {
            session {
                dashboard {
                    updateGrants (profileId: $profileId, grants: $grants)
                }
            }
        }
    `,
    addChannel: `
        mutation addChannel ($profileId: ID!, $channelId: ID!, $vendor: String!) {
            session {
                    dashboard {
                    addChannel (profileId: $profileId, channelId: $channelId, vendor: $vendor)
                }
            }
        }
    `,
}
