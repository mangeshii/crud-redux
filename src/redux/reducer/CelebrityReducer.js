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
        case "SEARCH_NAME":
            const filteredName = state.celebrityData.filter((item) => {
                if (action.payload == "") {
                    return item
                } else if (item.first.toLowerCase().includes(action.payload.toLowerCase())) {
                    return item
                }
            })
            // console.log(filteredName)
            return {
                ...state,
                celebrityData: filteredName
            }
        default:
            return state
    }
}