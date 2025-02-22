import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import FetchReactQueryIdData from "./react-query-id"

async function getRecipes() {
  await new Promise((resolve)=> setTimeout(resolve,1000))

  const apiResponse = await fetch('https://dummyjson.com/recipes')
  return await apiResponse.json()
}

async function addRecipes(recipeName) {
  await new Promise((resolve)=> setTimeout(resolve,1000))

  const apiResponse = await fetch('https://dummyjson.com/recipes/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: recipeName
    /* other recipe data */
  })
})
  return await apiResponse.json()
}

function FetchApiReactQuery() {
    const queryClient = useQueryClient()
    const [recipeTitle , setRecipeTitle] = useState('')

    const {data , isFetching , refetch} = useQuery({
      queryKey: ['recipes'],
      queryFn: getRecipes,
      refetchOnWindowFocus: false, // ❌ No refetch when switching tabs
      refetchOnReconnect: false,   // ❌ No refetch when internet reconnects
    })

    console.log(data);

    const { mutateAsync: handleMutationAddNewRecipe } = useMutation({
      mutationFn: addRecipes,
      onSuccess: (newRecipes) => {
        queryClient.setQueryData(['recipes'] , (oldData)=>{
          if(!oldData || !oldData.recipes) return { recipes: newRecipes}

          return {
            ...oldData,
            recipes: [...oldData.recipes , {id: oldData.recipes.length + 1, ...newRecipes}]
          }
        })
      }
    });
    
    async function handleAddNewRecipe() {
      await handleMutationAddNewRecipe(recipeTitle)
      setRecipeTitle('')
    } 

    if(isFetching) return <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">Loading...</h1>
    </div>

  return (
    <div className="py-10 gap-4  w-full flex flex-col justify-center items-center">
       <div className="flex gap-2">
          <input type="text" name="text" id="text" placeholder="Enter a recipe name"
                  value={recipeTitle} onChange={(event)=> setRecipeTitle(event.target.value)} />
          <button onClick={handleAddNewRecipe} className="px-4 py-2 shadow rounded w-full">Add recipe</button>
       </div>
      {
         data?.recipes && data?.recipes?.length > 0 ?
         data?.recipes?.filter(recipe=> recipe?.id > 25).map(recipe=>
          <div key={recipe?.id} className="px-4 py-2 shadow rounded w-full">
            <h1>{recipe?.name}</h1>
          </div>
         )
         : null
      }
      <button className="mb-20" onClick={()=> refetch()}>Refetch</button>

      <FetchReactQueryIdData />
    </div>
  )
}

export default FetchApiReactQuery