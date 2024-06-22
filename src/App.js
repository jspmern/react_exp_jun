import React, { createContext, useState } from 'react'
import Props from './props/Props';
import ChildProps from './props/ChildProps';
import Counter from './state/Counter';
import ClassCounter from './state/ClassCounter';
import Condition from './conditionalrendering/Condition';
import Loop from './looping/Loop';
import ControlanUncontrol from './controlanduncontrolcomp/ControlanUncontrol';
import A from './comp/A';
import AuthContext from './context/AuthContext';
import ProductContext from './context/ProductContext';
import Todo from './comp/Todo';
import TodoContext from './context/todoContext';
import { ExampleOfLC } from './lyfeCyckeMethod/ExampleOfLC';
import FunctionLifeCycle from './lyfeCyckeMethod/FunctionLifeCycle';
import Debouncing from './bonous/Debouncing';
import CounterProblem from './hook/CounterProblem';
import LocalStorage from './hook/LocalStorage';
import Fetch from './hook/Fetch';
import Product from './hoc/Product';
import Todos from './hoc/Todos';
import higherOrderComp from './hoc/higherOrderComp';
//https://hackernoon.com/mastering-higher-order-components-hocs-in-react
function App() {
  let [name,setname]=useState('utsav')
  let NewTodo=higherOrderComp(Todos,'todos')
  let NewUser=higherOrderComp(Product,'users')
  return (
    <>
      {/* <Props > 
          <ChildProps data={obj}/>
           </Props> */}
      {/* <Counter/> */}
      {/* <ClassCounter/> */}
      {/* <Condition data="utsav"/> */}
      {/* <Loop/> */}
      {/* <ControlanUncontrol/> */}
         {/* <AuthContext>
         <ProductContext>
               <A />
          </ProductContext>
          </AuthContext> */}
          {/* <TodoContext>
          <Todo/>
          </TodoContext> */}
          {/* <ExampleOfLC name={name}/>
          <button onClick={()=>{
           let y= prompt('enter your name')
           setname(y)
          }}>click</button> */}
          {/* <FunctionLifeCycle/> */}
          {/* <Debouncing/> */}
            {/* <CounterProblem/> */}
            {/* <LocalStorage/> */}
            {/* <Fetch/> */}
            {/* <Product/>
            <h1>.....................</h1>
             <Todos/> */}
             <NewTodo/>
             <h1>;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;</h1>
             <NewUser/>
    </>
  )
}
export default App;