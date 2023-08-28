import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  const [newTodo, setNewTodo] = useState("");

  const saveNewTodo = () => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const removeTodo = (todoToRemove) => {
    const newTodos = todos.filter((todo) => todo !== todoToRemove);
    setTodos(newTodos);
  };

  return (
    <div style={{ fontSize: "30px" }}>
      {todos.map((todo, index) => {
        return (
          <div key={todo}>
            <input
              type="checkbox"
              name={todo}
              onChange={() => removeTodo(todo)}
            />
            <label htmlFor={todo}>
              {index + 1}. {todo}
            </label>
            <br />
          </div>
        );
      })}
      <div>
        <input onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={saveNewTodo}>Save todo</button>
      </div>
    </div>
  );
}

export default App;
