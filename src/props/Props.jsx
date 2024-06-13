import React from 'react'

function Props(props) {
  console.log(props.children.props)
  return (
  //<div>Props {name} and add {add}</div>
  <>
  <h1>hello how are you</h1>
  {props.children}
  </>
    
  )
}

export default Props