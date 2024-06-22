import React, { useState } from 'react'
import ErrorModel from './ErrorModel'

function CError() {
    let [count,setCount]=useState(1)
    function countHandler()
    {
        try{
            if(count==5)
                {
                   throw new Error('somthing wrong in comp a')
                }
                else{
                    setCount(count+1)
                }
        }
        catch(err)
        {
            throw new Error(err)
        }
    }
  return (
    <div>cError {count}
        <button onClick={countHandler}>click</button>
    </div>
  )
}

export default CError