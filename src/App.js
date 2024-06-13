import React from 'react'
import Props from './props/Props';
import ChildProps from './props/ChildProps';
import Counter from './state/Counter';
function App()
{
  let obj={name:"utsav",add:"delhi"}
  return (
         <>
         {/* <Props > 
          <ChildProps data={obj}/>
           </Props> */}
              <Counter/>
         </>
  )
}
export default App;