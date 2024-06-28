import React from 'react'
import { useState } from 'react'

export default function useCounter(initialState=0) {
  
    const [counter, setCounter] = useState(...initialState)
  
    const addValue = (value=1)=>{
        setCounter(...counter + value)
    }

    const restValue = (value=1)=>{
        if(counter <=0){
        setCounter(...counter - value)
    }

   const resetValue =()=>{
        setCounter(0)
        return counter
    }

    const restResPosite = (value=1)=>{
        if(counter == 0){
            console.log('Valor em 0.00')
            setCounter(0)
        }else if(counter>value){
            console.log('Operacao Indisponivel')
            setCounter(...counter)
        }else{
            setCounter(...counter-value)
        }
        return counter
    }
    
    return (
    {
        counter,
        setCounter,
        addValue,
        resetValue,
        restValue,
        restResPosite
    }
)
}
}
