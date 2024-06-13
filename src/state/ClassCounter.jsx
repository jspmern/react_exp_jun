import React from "react"
class ClassCounter extends React.Component
{
    constructor()
    {
        super()
        this.state={inc:1,dec:1}
     
    }
  commanHandler=(e)=>{
    if(e.target.innerText=="inc"){
        this.setState((pre)=>{
            return {inc:pre.inc+1}
        })
    }
    else{
        this.setState({dec:this.state.dec-1})  
    }
  }
   render()
   {
     return (
        <>
        <h1>inc{this.state.inc}</h1>
        <h1>inc{this.state.dec}</h1>
        {/* //<button onClick={this.setData.bind(this)}>click</button> */}
        <button onClick={this.commanHandler}>inc</button>
        <button onClick={this.commanHandler}>dec</button>

       
        </>
     )
   }
}
export default ClassCounter