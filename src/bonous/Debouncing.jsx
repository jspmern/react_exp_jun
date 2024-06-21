import React, { useRef, useState } from 'react'
// https://www.freecodecamp.org/news/javascript-debounce-example/
function Debouncing() {
    let [search,setSearch]=useState('')
    let id=useRef('')
    
    function textHandler(e)
    {
        if(id.current) clearTimeout(id.current)
        setSearch(e.target.value)
        //write searching concept
       id.current=  setTimeout(()=>{
            searchHandler()
        },2000) 
    }
    async function searchHandler()
    {
        let url=`https://dummyjson.com/products/search?q=${search}`
         try{
             let data= await fetch(url)
             let res= await data.json()
             console.log(res)
         }
         catch(err)
         {
            throw new Error(err)
         }
    }
  return (
    <div>
        {JSON.stringify(search,null,4)}
        <h1>Debouncing Example</h1>
        <input type="search" placeholder='Enter your input' onChange={textHandler}/>

    </div>
  )
}

export default Debouncing