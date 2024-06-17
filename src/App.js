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
function App() {
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
         <AuthContext>
         <ProductContext>
               <A />
          </ProductContext>
          </AuthContext>
    </>
  )
}
export default App;