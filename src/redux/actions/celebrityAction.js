export const set_celebrities = (celebritiesData) => {
    return {
        type: "SET_CELEBRITY",
        payload: celebritiesData
    }
}
export const removeSelectedCelebrity = (celebrityData) => {
    return {
        type: "REMOVE_SELECTED_CELEBRITY",
        payload: celebrityData
    }
}
export const updateCelebrity=(celebrityData)=>{
    return{
        type: "UPDATED_CELEBRITY",
        payload: celebrityData
    }
}
