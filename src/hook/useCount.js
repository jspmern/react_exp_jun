import { useState } from "react"

 

function useCount(arg=0) {
    let [count,setCount] = useState(arg)
    function counterHandler()
    {
        setCount(count+1)
    }
    return [count,counterHandler]
}

export default useCount