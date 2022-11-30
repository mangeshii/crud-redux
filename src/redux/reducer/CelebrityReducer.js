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
            const newstate = state.celebrityData.filter((item) => item.id !== action.payload)
            return {
                ...state,
                celebrityData: newstate

            }
        case "EDIT_CELEBRITY":
            const {id,...name}=action.payload
            const indexToUpdate = state.celebrityData.find(post => post.id === id)
            const newPostsData = [...state.celebrityData]
            newPostsData[indexToUpdate.id - 1] = {...newPostsData[indexToUpdate.id - 1],...name}
            
            return {
                ...state,
                celebrityData:newPostsData
            }
            
        default:
            return state
    }
}