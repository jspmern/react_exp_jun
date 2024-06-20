import React, { useEffect, useState } from 'react'

function FunctionLifeCycle() {
    console.log('..................................')
    let [count,setCount]=useState(1)
    //this is for the click handler
    function clickHandler()
    {
        setCount(pre=>pre+1)
    }
    //(it is treated like noraml function)
    useEffect(()=>{
        console.log('hello i am useEffect')
    })
    //mount phase
    useEffect(()=>{
        console.log('hello i am mount phase')
    },[])
    //updated phase
    useEffect(()=>{
        console.log('hello i am updated phase')
    },[count])
   //unmount and cleanup function
   useEffect(()=>{
        console.log('i am main body')
        return ()=>{
            console.log('hello i am cleanup')
        }
   },[count])

  return (
    
    <>
    {console.log('hello i am return')}
    <h1>hello life cycle method</h1>
    <h1>counter:{count}</h1>
    <button onClick={clickHandler}>inc</button>
    </>
  )
}

export default FunctionLifeCycle