import { createContext, useState } from "react";

 export let userContext=createContext()
 

function AuthContext({children}) {
    function loginHandler() {
        setLogin((pre)=>{
            return {...pre,okay:!pre.okay}
        })
      }
    
      let [login, setLogin] = useState({
        okay: false,
        status: 200
      })
  return  <userContext.Provider value={{...login,loginHandler}}>
              {children}
  </userContext.Provider>
}

export default AuthContext