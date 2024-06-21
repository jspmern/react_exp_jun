import React, { useEffect, useState } from 'react'

function useLocalStorage(arg='') {
    let x=''
    let [data,setData]=useState('')
    function setDataHandler()
    {
        localStorage.setItem('msg',JSON.stringify(arg))
    }
    
    useEffect(()=>{
        if(localStorage.getItem('msg'))
            {
            x=localStorage.getItem('msg')?JSON.parse(localStorage.getItem('msg')):[]
            setData(x)
            } 
    },[data])
 
    return [data,setDataHandler]  
}

export default useLocalStorage