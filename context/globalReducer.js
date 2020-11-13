export default function globalReducer(state, action) {
    const { type, payload } = action;

    switch(type){

        case('LOAD_TODOS'):
            return [...payload]
        case ('ADD_TODO'):
            return [
                ...state,
                { id: Math.floor(Math.random() * 99999), task: payload, completed: false  }
            ]
        case ('TOGGLE_TODO'):
            return state.map(todo => (todo.id === payload ? {...todo, completed: !todo.completed} : todo))
        case('DELETE_TODO'):
            console.log(`deleting ${payload}`)
            return state.filter(todo=> todo.id !== payload);
        default:
      return state;
    }

    
  
    
  }
  