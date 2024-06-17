import React, { useContext } from 'react'
import C from './C'
import { userContext } from '../context/AuthContext'
import { prodContext } from '../context/ProductContext'
function B() {
    let user=useContext(userContext)
    let prod=useContext(prodContext) 
  return (
    <div>
  <p>component B</p>
  <>
  {
    user.okay?<div><p>prodname is:{prod.name}</p>
    <p>price is :{prod.price}</p></div> : <button onClick={()=>{
        user.loginHandler()
    }}>lfirstlogin</button>
  }</>
 
     {/* {<userContext.Consumer>
        {(item)=>{
            {console.log('item',item)}
            return <productContext.Consumer>
                  {(prod)=>{
                    return (
                        <>
                        {item.okay?<p>prodname:{prod.name} and price :{prod.price}</p>:<div>
                            <button onClick={()=>{
                                item.loginHandler()
                            }}>doLogin</button>
                            </div>}
                        </>
                    )
                  }}
            </productContext.Consumer>
        }}
    </userContext.Consumer>} */}

        <C/>
    </div>
  )
}

export default B