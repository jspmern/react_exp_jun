import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

function LocalStorage() {
    let [text,setText]  = useState('')
    //this is for the local stroage
     function localStorageHandler(e)
    {
        setText(e.target.value)
        setData()
    }
    let [data,setData] = useLocalStorage(text)
    console.log('hello i am data',data)
    
 
  return (
    <>
    {  JSON.stringify( text,null,4)}
     <h1> This is Custom hook for Local Storage</h1>
     <input type='text' placeholder='enter the value' onChange={localStorageHandler}/>
     </>
  )
}

export default LocalStorage