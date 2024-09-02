import React from 'react';
import AppTodo from './AppTodo';
import { TodoProvider } from '../TodoContext';

function App() {
  return(
    <TodoProvider>
      <AppTodo/>
    </TodoProvider>  
  );
}

export default App;
