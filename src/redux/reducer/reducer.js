import {ADD_TO,DELETE} from "./../action"
import {createStore} from "redux"

export const to_do = (state=[],action) =>{
    switch(action.type){
        case ADD_TO:
            return [...state,action.input]
        case DELETE:
            return state.slice(0, action.item).concat(state.slice(action.item + 1, state.length));
        default:
            return state
    }
}

export const store = createStore(
    to_do
)