import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function getSingleRecipe(id) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
  return await apiResponse.json();
}

async function getSingleRecipeByName(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const apiResponse = await fetch(`https://dummyjson.com/recipes/search?q=${name}`);
  return await apiResponse.json();
}

function FetchReactQueryIdData() {
  const [id, setId] = useState(1);
  const [name, setName] = useState('Russian Borcht');
  const [recipeName, setRecipeName] = useState(null);

  const { data } = useQuery({
    queryKey: ['recipes', id],
    queryFn: () => getSingleRecipe(id),
  });

  const { data: recipeDetails } = useQuery({
    queryKey: ['recipeDetails', recipeName], // ✅ Uses updated recipeName
    queryFn: () => getSingleRecipeByName(recipeName),
    enabled: !!recipeName, // ✅ Ensures query only runs when recipeName exists
  });

  function handleOnClick(event) {
    event.preventDefault();
    
    if (!name.trim()) return; // ✅ Prevents empty search
    
    setRecipeName(name); // ✅ Updates state, triggering a new query

    setName('')
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-4">Recipes:</h1>
        <div className="px-4 py-2 shadow">
          <h1>{data?.name}</h1>
          <h1>{data?.id}</h1>
        </div>
        <button onClick={() => setId(id + 1)} className="px-4 py-2 shadow bg-amber-100">Next Recipe</button>
        <button onClick={() => setId(1)} className="px-4 py-2 shadow bg-amber-100">Reset</button>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter A Recipe Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleOnClick}>Show Recipe</button>

        <div className="px-4 py-2 shadow flex flex-col gap-3">
          {
            recipeDetails?.recipes?.length > 0 ?
            recipeDetails?.recipes?.map(recipe=> 
              <div key={recipe?.id} className="flex flex-col p-2 shadow">
                 <h1 className="text-xl font-semibold">{recipe?.name}</h1>
                 <p className="text-lg font-semibold">Ingredients:</p>
                 <p>{recipe?.ingredients.map((ingredients,index)=> 
                  <li key={index}>{ingredients}</li>
                 )}</p>
              </div>
            )
            : null
          }
        </div>
      </div>
    </>
  );
}

export default FetchReactQueryIdData;
