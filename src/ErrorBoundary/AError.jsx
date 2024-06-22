import React, { useState } from 'react'

function AError() {
    let [count,setCount]=useState(1)
    function countHandler()
    {
        try{
            if(count>5)
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
    <div>AError {count}
        <button onClick={countHandler}>click</button>
    </div>
  )
}

export default AError