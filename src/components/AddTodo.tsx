import React, { useContext, useState } from "react";
import { P } from "../App";
import { addTodo } from "../actions";


export const AddTodo: React.FC = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useContext(P)

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setTodo(value);
    }

    const onAddTodoClicked = (event: React.MouseEvent) => {
        
        dispatch(addTodo(todo))
    }
    return (<>
        <input type="text" name="todo" value={todo} placeholder="Todo" onChange={onInputChange} /><button onClick={onAddTodoClicked}>Add todo</button>
    </>)
}