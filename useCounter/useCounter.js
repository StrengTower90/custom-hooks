import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState( initialValue )
    // console.log( Counter );

    const increment = ( value = 1 ) => {
        setCounter( (current) => current + value );
    }
    
    const decrement = ( value = 1 ) => {
        
        if( counter === 1 )
          setCounter( initialValue ); 
        else
          setCounter( (current) => current - value );   
        
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}