

export const TodoReducer = ( initialState = [], action ) => {

     switch ( action.type ) {
        case '[TODO] add todo':             
           return [ ...initialState, action.payload ]
           
        case '[TODO] Remove todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle todo':
            return initialState.map( todo => {
                if( todo.id === action.payload )
                {
                    return {
                        ...todo,
                        done: !todo.done,
                    }                
                }
                return todo;
            });
     
        default:
            return initialState;
     }
}