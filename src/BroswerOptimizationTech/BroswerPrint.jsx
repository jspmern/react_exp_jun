import React, { useMemo } from 'react'

let BroswerPrint= React.memo(({countHandler})=>{ 

    console.log('hello i am broswer print')
    let arr=[]
    let value=0
    let childValue=useMemo(()=>{
        for(let i=1;i<10000;i++)
            {
                console.log('hello')
                  value++
            }
            return value
    },[])
    
    return(
        <>
        <h1>hello i am broswer print {childValue}</h1>
        <button onClick={countHandler}>click</button>
        </>
    )
})

export default BroswerPrint