import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, completeTodoAction, deleteTodoAction, updateTodoAction } from './redux/actions/todoAction'

function App() {
  const [todo, setTodo] = useState('');
  const [todoId, setTodoId] = useState(-1);
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => { dispatch(todoId >= 0 ? updateTodoAction(todoId, todo) : addTodoAction(todo)); setTodo(''); setTodoId(-1) }}>{todoId >= 0 ? 'Update' : 'Add'} todo</button>
        <h1>Pending</h1>
        {!todos.length && <h3>No Pending Todos</h3>}
        {todos.map((todo, index) => {
          if (!todo.completed)
            return <div key={index}>
              <h3>{todo.title}</h3>
              <button onClick={() => { setTodo(todo.title); setTodoId(index); }}>update todo</button>
              <button onClick={() => { dispatch(deleteTodoAction(index)); }}>Delete todo</button>
              <button onClick={() => { dispatch(completeTodoAction(index, todo)); }}>Mark as Completed todo</button>
            </div>
        })
        }
      </div>
      <div>
        <h1>Completed</h1>
        {!todos.length && <h3>No Completed Todos</h3>}
        {todos.map((todo, index) => {
          if (todo.completed)
            return <div key={index}>
              <h3>{todo.title}</h3>
            </div>
        })
        }
      </div>
    </>
  )
}

export default App
