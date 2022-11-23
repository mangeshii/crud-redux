const initialState = {
    celebrityData:[]
}

export const setCelebrity=(state=initialState,action)=>{
    switch(action.type){
        case "SET_CELEBRITY":
            return {...state,celebrityData:action.payload}
        default:
            return state
    }
}