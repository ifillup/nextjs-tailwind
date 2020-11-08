import {useGlobalContext} from '../context/GlobalState'

const Todo = ({todo}) => {
    const {dispatch} = useGlobalContext();
    return (
        <li className='my-1'>
            <span 
                className='px-2 text-red-500 hover:text-red-800 cursor-pointer'
                onClick={()=>dispatch(({type: 'DELETE_TODO', payload: todo.id}))} 
                >X</span>
            <input 
                className='px-2'
                type="checkbox" 
                defaultChecked={todo.completed} 
                onClick={()=>dispatch(({type: 'TOGGLE_TODO', payload: todo.id}))} 
            />
           <span className={`px-2 cursor-default hover:text-gray-800 ${todo.completed && 'line-through'}`}>{todo.task}</span>
        </li>
    )
}

export default Todo
