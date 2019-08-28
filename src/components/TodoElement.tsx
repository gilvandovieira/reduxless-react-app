import React, { useContext } from "react";

import { Todo } from "../types";
import { P } from "../App";
import { changeState } from "../actions";

interface Props {
    todo: Todo
}


export const TodoElement: React.FC<Props> = ({ todo }) => {
    const dispatch = useContext(P)

    const onChangeStateClicked = (event: React.MouseEvent) => {
        dispatch(changeState(todo))
    }

    return (<>
        <h1>{todo.title}</h1>
        <p>{todo.isCompleted ? "Completed" : "Incompleted"} <button onClick={onChangeStateClicked} name="ChangeState" title="Change State"/></p>
    </>)
}