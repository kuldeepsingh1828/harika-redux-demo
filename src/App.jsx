import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, deleteTodoAction, updateTodoAction } from './redux/actions/todoAction'

function App() {
  const [todo, setTodo] = useState('');
  const [todoId, setTodoId] = useState(-1);
  const todos = useSelector(state => state.todos);
  const completedTodos = useSelector(state => state.completedTodos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => { dispatch(todoId >= 0 ? updateTodoAction(todoId, todo) : addTodoAction(todo)); setTodo(''); setTodoId(-1) }}>{todoId >= 0 ? 'Update' : 'Add'} todo</button>
        <h1>Pending</h1>
        {todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <button onClick={() => { setTodo(todo.title); setTodoId(index); }}>update todo</button>
            <button onClick={()=>{dispatch(deleteTodoAction(index));}}>Delete todo</button>
            <button>Mark as Completed todo</button>
          </div>))
        }
      </div>
      <div>
        <h1>Completed</h1>
        {completedTodos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
          </div>))
        }
      </div>
    </>
  )
}

export default App
