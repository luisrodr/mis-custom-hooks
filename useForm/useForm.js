import  { useState } from 'react';

export const useForm = (initialState={}) => {

    const [values, setValues] = useState(initialState);

    const reset=()=>{
        setValues(initialState);
    };

    const handleInputChange=({target})=>{
        //console.log(target.name);
        //console.log(target.value);

        //se afecta al name de cada input desde su value
        setValues(
            {
                ...values,
                [target.name]:target.value
            }
        );
    };

    return [values,handleInputChange,reset];

};
