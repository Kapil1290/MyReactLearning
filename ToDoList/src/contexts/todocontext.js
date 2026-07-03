import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "todo msg",
            status: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)  // a seperate thing, about you are talking like todocontext in   
}

export const TodoProvider = TodoContext.Provider;