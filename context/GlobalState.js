import { createContext, useReducer, useContext, useEffect } from 'react';
import globalReducer from './globalReducer'

const initialState = [];

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('todos', JSON.stringify(state))
            }
        }, [state])
    return (
        <GlobalContext.Provider value={{
           state,
           dispatch 
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)