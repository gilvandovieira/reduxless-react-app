import React from "react";
import { TodoState } from "../types";
import { TodoElement } from "./TodoElement";

interface Props {
    s: TodoState
}
export const TodoList: React.FC<Props> = ({ s }) => {

    return (<div>{s.todos.map(todo => <TodoElement todo={todo} />)}</div>)
}