import React, { createContext, useReducer, Context } from 'react';
import { TodoReducer } from './reducer';
import { TodoActions } from './types';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

export let P: Context<React.Dispatch<TodoActions>>;

const App: React.FC = () => {

  const [state, dispatch] = useReducer(TodoReducer, { todos: [] });
  P = createContext<React.Dispatch<TodoActions>>(dispatch);
  return (
    <>
      <P.Provider value={dispatch}>
        <AddTodo />
        <TodoList s={state} />
      </P.Provider>
    </>
  );
}

export default App;
