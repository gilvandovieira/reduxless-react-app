import { ADD_TODO, CHANGE_STATE } from '../types'


let todos = 0;

export const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload: {
            _id: ++todos,
            title,
            isCompleted: false
        }
    }
}

export const changeTodoState = (index) => {
    return {
        type: CHANGE_STATE,
        payload: index
    }
}