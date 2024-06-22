import React, { useEffect, useState } from 'react'
function higherOrderComp(WrapperComp,entity) {
  return function()
  {  
    let [data,setData]=useState([])
    let [filter,setFilter]=useState([])
    let [text,setText]=useState('')
      //this is for fetching data
      async function fetchProductData()
      {
          try{
                let res=await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                let data=await res.json()
                setData(data)
                setFilter(data)
          }
          catch(err)
          {
              throw new Error('somthing wrong !')
          }
      } 
    useEffect(()=>{
        fetchProductData()
    },[])
       //this is for changeHandler
    function changeHandler(e)
    {
        console.log('helloooo')
        setText(e.target.value)
         setFilter((pre)=>{
            return pre.filter((item)=>{
                return item.title.trim().toLowerCase().includes(e.target.value.toLowerCase().trim())
            })
         })
    }
    return (
        <div className="container">
        <div className="row">
        <div className="col">
            <input type='text' placeholder='enter your product' onChange={changeHandler} value={text}/>
        </div>
    </div>
       <WrapperComp data={filter.slice(0,10)}/>
    </div>
    )
  }
}

export default higherOrderComp