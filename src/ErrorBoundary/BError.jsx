import React, { useState } from 'react'

function BError() {
    let [count,setCount]=useState(1)
    function countHandler()
    {
       
           
                    setCount(count+1)
                 
        
    }
    if(count>5)
        {
          throw  new Error('somting wrong in comp B')
        }
        else{
            return (
                <div>BError {count}
                    <button onClick={countHandler}>click</button>
                </div>
              )
        }
}

export default BError