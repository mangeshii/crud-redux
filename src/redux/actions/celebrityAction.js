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

export const search_name = (name) => {
    // console.log(name)
    return {
        type: "SEARCH_NAME",
        payload: name
    }
}