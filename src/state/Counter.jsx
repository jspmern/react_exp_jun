import React, { useEffect, useState } from 'react'

function Counter() {
    console.log('...................................')
    let data=1
  let [count,setCount] = useState({inc:1,dec:1})
  function commanHandler(e)
  {
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    // if(e.target.innerText=="inc")
    //     {
    //          setCount({...count,inc:count.inc+1})
    //     }
    //     else{
    //         setCount({...count,dec:count.dec-1})
    //     }

    setCount((pre)=>{
       if(e.target.innerText=="inc")
        {
              return{...pre,inc:pre.inc+1}
        }
        else{
             return{...pre,dec:pre.dec-1}
        }
    })
   } 
  return (
     <>
     {JSON.stringify(count)}
     inc:{count.inc}
     <br/>
     <br/>
     dec:{count.dec}
     <br/>
     <br/>
     <button onClick={commanHandler} > inc</button>
     <button onClick={commanHandler}>dec</button>
     </>
  )
}

export default Counter