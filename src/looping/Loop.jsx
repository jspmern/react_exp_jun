import React from 'react'

function Loop() {
    let data=[{name:"utsav"},{name:"vicky"},{name:"kishor"}]
     let newtemp=[];
    // data.forEach((item)=>{
    //      newtemp.push(<h1>{item.name}</h1>)
    // })
  return (
    //   <>
    //   {data.length>0&& data.filter((item,i)=>{
    //     let {name}=item
    //     return name=="utsav"
       
    //   }).map((item)=>{
    //     return <h1>{item.name}</h1>
    //   })}
    //   </> 
       <>
       {/* {newtemp} */}
       {
        (function(){
            data.forEach((item)=>{
                newtemp.push(<h1>{item.name}</h1>)
           })
        }())

       }
       {newtemp}
       </>
  )
}

export default Loop