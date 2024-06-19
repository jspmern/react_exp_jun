// import React, { useState } from 'react'

// function Todo() {
//     let[text,setText]=useState()
//     let [todo,setTodo]=useState([])
//     let [show,setShow]=useState(true)
//     //this is for texthandler
//     function textHandler(e)
//     {
//          setText(e.target.value) 
//     }
//     //this is for the submit handler
//     function submitHandler()
//     {
//         if(todo.length>0)
//             {
//                 setShow(false)
//             }
//         let obj={
//             id:new Date().getMilliseconds(),
//             text
//            }
//            setTodo((pre)=>{
//             return [...pre,obj]
//            })
//     }
//     function delelteHandler(id)
//     {
//         setTodo((pre)=>{
//             return pre.filter(item=>item.id !=id)
//         })
//     }
//   return (
//     <>
//     <div>Todo</div>
//     <br/>
//     <input type='text' placeholder='enter your text' onChange={textHandler}/>
//     <button onClick={submitHandler}>click</button>

//     <p>***********************************************</p>
//     {
//       show && <h1>hello i am example</h1>
//     }
//     {
//           todo.length>0  &&  todo?.map((item)=>{
//            return  <div key={item.id}>
//                 <h5>{item.text}</h5>
//                 <button onClick={()=>{
//                     delelteHandler(item.id)
//                 }}>del</button>
//             </div>
//         })
//     }
//     </>

//   )
// }

// export default Todo


//////by using reducer

import React, { useContext} from 'react'
import { todoContextValue } from '../context/todoContext'
function Todo() {
    let {text,todo,setTodoHandler,todoSubmitHandler,todoDeleteHandler}=useContext(todoContextValue)
    function submitHandler() {
         todoSubmitHandler()  
    }
    function textHandler(e) {
        setTodoHandler(e.target.value)      
    }
    function deleteHandler(id) {
        todoDeleteHandler(id)   
    }
    return (
        <>
            <div>Todo</div>
            <br />
            <input type='text' placeholder='enter your text' onChange={textHandler} value={text} />
            <button onClick={submitHandler}>click</button>
            <p>********************************************</p>
            {
                todo.length > 0 &&
                <>
                    {
                        todo.map((item) => {
                            return <div key={item.id}>
                                <h6>{item.text}</h6>
                                <button onClick={() => {
                                    deleteHandler(item.id)
                                }}>del</button>
                            </div>
                        })
                    }
                </>
            }
        </>
    )
}

export default Todo