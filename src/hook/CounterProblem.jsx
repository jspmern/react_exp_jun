import React, { useState } from 'react'
import useCount from './useCount'

function CounterProblem() {
   let [x,setCount] = useCount(10)
  return (
    <>
     <h1>count:{x}</h1>
     <button onClick={()=>{
      setCount()
     }}>inc</button>
     </>
  )
}

export default CounterProblem