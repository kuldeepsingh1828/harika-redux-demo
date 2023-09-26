import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos);
  const completedTodos = useSelector(state => state.completedTodos);
  return (
    <>
      <div>
        <h1>Pending</h1>
        {todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
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
