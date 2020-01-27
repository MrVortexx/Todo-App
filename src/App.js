import React,{useState} from 'react';
 import './App.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  
  function submitTodo(e){
    e.preventDefault()
    
    setTodos([...todos, {todo, id: Date.now()}])    
    e.target.reset()
  }

  function deleteTodo(id){

    setTodos(todos.filter((todo)=> todo.id !== id))
   }
  return (
    <div className="App container">
      <div className="todoApp">

      <header> <strong>TodoApp</strong> </header>

      <form  onSubmit={submitTodo}>
        <div className="form-group">
           <input type="text" className="form-control form-control-sm" onChange={e=> setTodo(e.target.value)}
           id="TodoInput" placeholder="Your todo"/>
        </div>
      </form>

        <ul>
          {todos.map(todo=> (
            <div>

            
            <li key={todo.id}>{todo.todo} </li>
            <a href="#" onClick={()=> deleteTodo(todo.id)}>x</a>
            </div>            
            
          ))}  

        </ul>
      </div>
      
    </div>
  );
}

export default App;
