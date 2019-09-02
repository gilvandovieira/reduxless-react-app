
export const ADD_TODO = 'ADD_TODO'

export const CHANGE_STATE = 'CHANGE_STATE'

export interface Todo {
    _id: number
    title: string
    isCompleted: boolean
}

export interface TodoState {
    todos: Todo[]
}

export interface AddTodoAction {
    type: typeof ADD_TODO
    payload: Todo
}

export interface ChangeStateAction {
    type: typeof CHANGE_STATE
    payload: Todo
}

export type TodoActions = AddTodoAction | ChangeStateAction