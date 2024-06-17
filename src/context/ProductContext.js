import { createContext } from "react";
export let prodContext=   createContext()
function ProductContext({children}) {
    let product = {
        name: 'nike',
        price: "200",
        isAvailble: true
      }
    return <prodContext.Provider value={{...product}}>
              {children}
    </prodContext.Provider>
}

export default ProductContext