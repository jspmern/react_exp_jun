import React from 'react'

function Condition(props) {
    //inside the jsx you can not able to use if-else
    //    if(props.data=="utsav")
    //     {
    //          return <h1>user is logged in successfully</h1>
    //     }
    //     else{
    //         return <h1>hello i am admin</h1>
    //     }
    // let name = "utsav"
    // switch (name) {
    //     case 'utsav':
    //         return <h1>hello utsav</h1>


    //     default:
    //         return <h1>hello admin</h1>
    // }

    //iife
    // return(
    //     <>
    //     {(function(){
    //         return <h1>hello i am iiife</h1>
    //     }())}
    //     </>
    // )

    // let str=""
    // if(props.data=="vicky")
    //     {
    //         str=<h1>hello how are you</h1>
    //     }
    //     else{
    //         str=<h1>hello utsav</h1>
    //     }
    //     return (
    //         <>
    //         {str}
    //         </>
    //     )


    return(<>
    {/* {props.data=="utsav"?"hello":"not hello"} */}
    {props.data=="utsav" && "hello how are you"}
    </>)

}

export default Condition