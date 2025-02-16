import { useEffect, useState } from "react"

function useFetch(url, options={}) {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(false)

  async function fetchData() {
    
    setLoading(true)
    
    try{
        const apiResponse = await fetch(url, {...options})
        if(!apiResponse?.ok) throw new Error (apiResponse.statusText)
        const result = await apiResponse.json()    

        if(result) {
            setData(result)
            setLoading(false)
        }

    } catch(e){
        console.log(e);
        setLoading(false)
    }
  }

  useEffect(()=>{
     fetchData()
  },[url])

  return {
    data,
    loading
  }
}

export default useFetch