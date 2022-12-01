const initialState = {
    celebrityData: [],
}

export const setCelebrity = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CELEBRITY":
            return {
                ...state, celebrityData: action.payload
            }

        case "REMOVE_SELECTED_CELEBRITY":
            const newstate = state.celebrityData.filter((item) => item.id !== action.payload)
            return {
                ...state,
                celebrityData: newstate
            }

        case "UPDATED_CELEBRITY": {
            const celebrity = action.payload
            const celebrityToUpdate = state.celebrityData.find((item) => item.id === celebrity.id)
            let newState = [...state.celebrityData];
            newState[celebrityToUpdate.id - 1] = celebrity;
            return {
                celebrityData: newState,
            }
        }            
          
        default:
            return state
    }
}

