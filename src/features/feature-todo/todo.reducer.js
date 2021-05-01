export const initialState = {
    list: [],
    limit: 20,
    selectedTodo: null,
}

/**
 * Actions
 */

export const SET_LIST = 'setList@todos'
export const SET_LIMIT = 'setLimit@todos'
export const SET_SELECTED = 'setSelected@todos'

export const setList = (todos) => ({
    type: SET_LIST,
    payload: { todos },
})

export const setLimit = (amount) => ({
    type: SET_LIMIT,
    payload: { amount },
})

export const setSelected = (todo) => ({
    type: SET_SELECTED,
    payload: { todo },
})

/**
 * Handlers
 */

export const actionHandlers = {
    [SET_LIST]: (state, { payload }) => ({
        ...state,
        list: payload.todos,
    }),
    [SET_LIMIT]: (state, { payload }) => ({
        ...state,
        limit: payload.amount,
    }),
    [SET_SELECTED]: (state, { payload }) => ({
        ...state,
        selectedTodo: payload.todo,
    }),
}

export default (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}
