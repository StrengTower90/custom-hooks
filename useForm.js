import { useState } from "react"

export const  useform = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target }) => {
        const { name,  value } = target;
        setFormState( {
            ...formState,
            [ name ]: value
        });
    }

    const onClickReset = () => {
        console.log( 'estoy en la funcion reset ');
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onClickReset,
    }
}