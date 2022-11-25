const initialState = {
    celebrityData: []
}

export const setCelebrity = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CELEBRITY":
            return {
                ...state, celebrityData: action.payload
            }

        case "REMOVE_SELECTED_CELEBRITY":
            const newstate = state.celebrityData.filter((item, index) => index !== action.payload)
            return {
                ...state,
                celebrityData: newstate

            }
        default:
            return state
    }
}