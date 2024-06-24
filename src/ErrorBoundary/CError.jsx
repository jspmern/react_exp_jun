import React, { useState } from 'react'
import ErrorModel from './ErrorModel'

function CError() {
    let [count,setCount]=useState(1)
    function countHandler()
    {
        setCount(count+1)
      
    }
    if(count>5)
        {
          throw  new Error('somting wrong in comp C')
        }
        else{
            return (
                <div>CError {count}
                    <button onClick={countHandler}>click</button>
                </div>
              )
        }
}

export default CError