import React, { useCallback, useState } from 'react'
import BroswerPrint from './BroswerPrint'

function BroswerCount() {
    console.log('hello broswer count')
    let[count,setCount]=useState(1)
    let [dec,setDec]=useState(10)
    //this is function for count handler
    let countHandler=useCallback(()=>
    {
        setCount(count+1)
    },[count])
    //this is function for dec
    function decHandler()
    {
      setDec(dec-1)
    }
  return (
    <>
    <p>BroswerCount inc{count}</p>
    <p>broswer count dec {dec}</p>
    <button onClick={decHandler}>dec</button>
    <br/>
    <BroswerPrint countHandler={countHandler}/>
    </>
  )
}

export default BroswerCount