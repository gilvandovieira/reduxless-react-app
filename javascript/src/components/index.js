import React, { useState, useContext } from 'react'

import { P } from '../App'
import { addTodo, changeTodoState } from '../actions'

export const Todo = ({ todo, index }) => {
    const dispatch = useContext(P)
    const onButtonClicked = () => {
        dispatch(changeTodoState(index))
    }
    return (<div>
        <p>{todo.title} is {todo.isCompleted? 'completed': 'incomplete'} <button name="changeState" onClick={onButtonClicked}>Change State</button></p>
    </div>)
}

export const TodoList = ({ todos }) => {
    return (<div>
        {todos.map((todo, index) => <Todo todo={todo} key={todo._id} index={index}/>)}
    </div>)
}

export const AddTodo = () => {
    const [title, setTitle] = useState('')
    const dispatch = useContext(P)
    const onButtonClicked = () => {
        dispatch(addTodo(title))
        setTitle('')
    }
    return (<div>
        <input value={title} name="title" placeholder="Todo" onChange={(e) => setTitle(e.target.value)} />
        <button name="addTodo" onClick={onButtonClicked}>Add Todo</button>
    </div>)
}