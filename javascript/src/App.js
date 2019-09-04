import React, { useReducer } from 'react';
import { TodoReducer } from './reducer'
import { AddTodo, TodoList } from './components';

export const P = React.createContext(null)

function App() {

  const [state, dispatch] = useReducer(TodoReducer, [])
  return (<>
    <P.Provider value={dispatch}>
      <AddTodo></AddTodo>
      <TodoList todos={state}></TodoList>
    </P.Provider>
  </>);
}

export default App;
