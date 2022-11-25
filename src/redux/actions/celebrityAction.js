export const set_celebrities = (celebritiesData) => {
    return {
        type: "SET_CELEBRITY",
        payload: celebritiesData
    }
}
export const remove_selected_celebrity = (celebrityData) => {
    return {
        type: "REMOVE_SELECTED_CELEBRITY",
        payload: celebrityData
    }
}

