import {useState} from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([  
    {id: 1, title: "Städa ditt  rum!", done: false},
    {id: 2, title: "Gå ut på solskensprommis!", done: false},
    {id: 3, title: "Öva gitarr!", done: false},
  ]);

  const toggleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo));
  };

  return (
    <div>
      <h1>Min Todo-lista</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleDone(todo.id)}
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            cursor: "pointer",
            color: todo.done ? "black" : "white",
          }}>
            {todo.title}    
            </li>
        ))}
      </ul>
    </div>
  );
};


export default App;