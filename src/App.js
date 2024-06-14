import React from 'react'
import Props from './props/Props';
import ChildProps from './props/ChildProps';
import Counter from './state/Counter';
import ClassCounter from './state/ClassCounter';
import Condition from './conditionalrendering/Condition';
import Loop from './looping/Loop';
import ControlanUncontrol from './controlanduncontrolcomp/ControlanUncontrol';
function App()
{
  let obj={name:"utsav",add:"delhi"}
  return (
         <>
         {/* <Props > 
          <ChildProps data={obj}/>
           </Props> */}
              {/* <Counter/> */}
              {/* <ClassCounter/> */}
              {/* <Condition data="utsav"/> */}
              {/* <Loop/> */}
              <ControlanUncontrol/>
         </>
  )
}
export default App;