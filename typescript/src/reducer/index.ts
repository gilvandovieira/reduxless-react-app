import { TodoActions, TodoState, ADD_TODO, CHANGE_STATE } from "../types";



export const TodoReducer = (s: TodoState, action: TodoActions) => {
    switch (action.type) {
        case ADD_TODO:
            s.todos.push(action.payload)
            return s
        case CHANGE_STATE:
            let index = s.todos.findIndex(t => action.payload._id === t._id)
            s.todos[index].isCompleted = !s.todos[index].isCompleted
            return s
        default:
            return s
    }
}