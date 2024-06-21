import { useEffect, useState } from "react"
function useFetch(url) {
    let [error, setError] = useState('')
    let [loading, setLoading] = useState(false)
    let [data, setData] = useState([])
    async function fetchData()
    {
        setLoading(true)
        try{
            let res= await fetch(url) 
            let data=await res.json()
            console.log(data)
            setLoading(false)
            setData(data.products)

        }
        catch(err)
        {
            setLoading(false)
            setError(err)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

   return[loading,data,error]
}

export default useFetch