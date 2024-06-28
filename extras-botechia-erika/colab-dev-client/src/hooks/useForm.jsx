import { useState } from "react"

export default function useForm (initialForm = {}){


    const [formState, setFormState] = useState(...initialForm)
    
    
    function handle2Clear(e){
        e.preventDefault()
        setFormState(...initialForm)
    }

    function handleOnChangeInput({target}){
        const {name, value}=target
        setFormState({...formState, [name]: value 
        }
    )
    }

    return{
        formState,
        setFormState,
        handle2Clear,
        handleOnChangeInput
    }
}