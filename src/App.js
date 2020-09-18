import React, {useState} from 'react';
import  './App.css'; 

//could use props
//using destructuring  
function Todo({ todo, index, completeTodo, removeTodo }) {

  return (
    <div className="todo" style={{textDecoration : todo.isCompleted ? 'line-through' : '' }} >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}> X </button>
      </div>
    </div>
  );
}

function TodoForm({addTodo}){
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      placeholder=" Add Todo ..."
      onChange={e => setValue(e.target.value)}
      />
    </form>
  );

}

function App() {

  const [todo, setTodo] = useState([
    {
      text: 'learn react hooks',
      isCompleted: false
    },
    {
      text: 'learn php unit test',
      isCompleted: false
    },
    {
      text: 'read PHP advance topics',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodo = [...todo, {text}];
    setTodo(newTodo);
  }
  const completeTodo = index => {
    const newTodos = [...todo];
    newTodos[index].isCompleted = true;
    setTodo(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todo];
     newTodos.splice(index, 1);
     setTodo(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todo.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}></Todo>
        ))}
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>

    </div>
  );
}

export default App; 
