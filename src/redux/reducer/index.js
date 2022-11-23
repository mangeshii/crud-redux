import { combineReducers } from "redux";
import {setCelebrity} from "./CelebrityReducer"


export const rootReducer=combineReducers({
    setCelebrity: setCelebrity
})