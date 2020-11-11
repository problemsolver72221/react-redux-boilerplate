export const initialState = {
    list: [],
}

/**
 * Actions
 */

export const SET_LIST = 'setList@users'

export const setList = (todo) => ({
    type: SET_LIST,
    payload: { todo },
})

/**
 * Handlers
 */

export const actionHandlers = {
    [SET_LIST]: (state, { payload }) => ({
        ...state,
        todos: {
            list: [payload.todo],
        },
    }),
}

export default (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}
