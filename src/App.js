import React from 'react'
import Props from './props/Props';
import ChildProps from './props/ChildProps';
import Counter from './state/Counter';
import ClassCounter from './state/ClassCounter';
function App()
{
  let obj={name:"utsav",add:"delhi"}
  return (
         <>
         {/* <Props > 
          <ChildProps data={obj}/>
           </Props> */}
              {/* <Counter/> */}
              <ClassCounter/>
         </>
  )
}
export default App;