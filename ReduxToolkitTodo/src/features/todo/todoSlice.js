import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        {
            id: 1,
            text: "Learn Redux Toolkit"
        }
    ],
}    

export const todoSlice = createSlice({
    name: "todos",
    initialState,   /** this is the state coming from above initialState */
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            
        }
    }
})    