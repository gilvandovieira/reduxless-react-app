import { ADD_TODO, CHANGE_STATE } from "../types";


export const TodoReducer = (previousState = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            return previousState.concat(action.payload)

        case CHANGE_STATE:
            previousState[action.payload].isCompleted = !previousState[action.payload].isCompleted
            return previousState
        
        default:
            return previousState
    }

}