import { TodoActions, Todo, ADD_TODO, CHANGE_STATE } from "../types";

let todos = 0;

export const addTodo = (title: string): TodoActions => {
    return {
        type: ADD_TODO,
        payload: { _id: ++todos, title, isCompleted: false }
    }
}

export const changeState = (todo: Todo): TodoActions => {
    return {
        type: CHANGE_STATE,
        payload: todo
    }
}