import React, {useState} from 'react'
import {useGlobalContext} from '../context/GlobalState'

export const AddTodo = () => {
    const [value, setValue] = useState('');
    const {dispatch} = useGlobalContext();
    return (
        <div className={'my-2'}>
            <input 
                type="text" 
                className='border-b px-2'
                value={value} 
               onChange={e=>setValue(e.target.value)}
            />
            <button onClick={()=> {
                dispatch({type: 'ADD_TODO', payload: value})
                setValue('')
                }} >Add</button>
        </div>
    )
}
