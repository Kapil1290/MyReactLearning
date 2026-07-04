import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

export default function Todos() {
   const todos = useSelector(state => state.todos)
   console.log("todos from state", todos)
   const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {
        todos.length>0 ? todos.map((todo) => (
            <li key={todo.id} >
                {todo.text}
                console.log("todo from state", todo)
                <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                >X</button>
            </li>
        )) : <p>No Todos</p>
    }
    </>
  )
}
