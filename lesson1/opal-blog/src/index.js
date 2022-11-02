import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
import Todo from "./components/Todo.js";

const App = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todos 1", "todos 2"]);

  const increment = () => {
    setCount((c) => c + 1);

  };

  return (
    <>
      <Todo todos = {todos} />
      <hr />

      <div>
        Count: {count}

        <button 
          onClick = {increment}
        >
          +
        </button>

      </div>
    </>
  );



}



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App />);
