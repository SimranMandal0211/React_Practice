import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTodo,
  deleteTodo,
  toggleTodo
} from "./features/todos/todoSlice";

function App(){
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  
  const todos = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);


  function handleAddTodo(){
    if(text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };

    dispatch(addTodo(newTodo));
    setText("");
  }

  return(
    <>
      <h1>Todo List</h1>

      <input type="text" 
        value={text}
        onChange={() => setText(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>

            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed 
                ? "Completed"
                : "Pending"
              }
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;