import { createSlice, nanoid, current } from "@reduxjs/toolkit"


const initialState = {
    todos: [
        // {
        //     id: 1,
        //     text: "Learn Redux Toolkit"
        // }
    ],
}    

export const todoSlice = createSlice({
    name: 'todo',
    initialState,   /** this is the state coming from above initialState */
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
                
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const existingTodo = state.todos.find((todo) => todo.id === id)
            if (existingTodo) {
                existingTodo.text = text
            }
        }
    }
})    

export const { addTodo, removeTodo } = todoSlice.actions  /** here actions contains addtodo, removetodo, and updatetodo */

export default todoSlice.reducer  /** this is the reducer which will be used in the store.js file */