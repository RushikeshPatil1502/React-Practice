import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

async function getSingleRecipe(id) {
  await new Promise((resolve)=> setTimeout(resolve,1000))

  const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`)
  return await apiResponse.json()
}


function FetchReactQueryIdData() {
    const [id , setId] = useState(1)
    const {data} = useQuery({
        queryKey: ['recipes', id],
        queryFn: () => getSingleRecipe(id)
    })

  return (
    <div className="flex flex-col gap-4">
    <h1 className="text-4xl font-bold mb-4">Recipes:</h1>
      <div className="px-4 py-2 shadow">
        <h1>{data?.name}</h1>
        <h1>{data?.id}</h1>
      </div>
      <button onClick={()=> setId(id + 1)} className="px-4 py-2 shadow bg-amber-100">Next Recipe</button>
      <button onClick={()=> setId(1)} className="px-4 py-2 shadow bg-amber-100">Reset</button>
    </div>
    
  )
}

export default FetchReactQueryIdData