import React, {useEffect} from 'react'
import { AddTodo } from './AddTodo'
import Todo from './Todo'
import {useGlobalContext} from '../context/GlobalState'

const TodoList = ({}) => {
    const {state: todos, dispatch } = useGlobalContext();
    useEffect(() => {
        dispatch({type: 'LOAD_TODOS', payload: JSON.parse(localStorage.getItem('todos'))})
    }, [])
    

    return (
        <div>
            <h4>TodoList</h4>
            <AddTodo />
            <ul>
            {todos.map(todo =>(<Todo key={todo.id} todo={todo}/>))}
            </ul>
        </div>
    )
}

export default TodoList
