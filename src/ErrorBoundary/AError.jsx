import React, { useState } from 'react'

function AError() {
    let [count,setCount]=useState(1)
    function countHandler()
    {
       setCount(count+1)
    }
    if(count>5)
        {
          throw  new Error('somting wrong in comp A')
        }
        else{
            return (
                <div>AError {count}
                    <button onClick={countHandler}>click</button>
                </div>
              )
        }

}

export default AError