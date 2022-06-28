import { useEffect, useReducer } from "react";
import { TodoReducer } from "../08-useReducer/TodoReducer";

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( TodoReducer, initialState, init );

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
     }, [ todos ]);

     const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] add todo',
            payload: todo, 
        }
        dispatch( action );
    }
    
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove todo',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id,
        });
    }


  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done ).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}