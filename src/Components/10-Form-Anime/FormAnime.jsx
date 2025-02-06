import { useState } from "react"

function FormAnime() {

    const [formData ,setFormData] = useState({
            name: ''
        })
    const [submittedData , setSubmittedData] = useState([])
    const [animeDetails , setAnimeDetails] = useState([])

    function handleChange(event){
        const {name , value} = event.target
 
        setFormData({
         ...formData, 
         [name] : value
        })
     }

     function handleSubmit(event){
        event.preventDefault()

        if (!formData.name.trim()) {
            alert("Please provide valid name");
            return;
        }

        

        setSubmittedData([...submittedData , {
            name: formData.name
        }])

        setFormData(
            {
                name: ''
            }
        )
    }

    async function fetchAnimeByName(getAnimeName) {
      try{
        const apiResponse = await fetch(`https://api.jikan.moe/v4/anime?q=${getAnimeName}`)
        const result = await apiResponse.json()
        
        if(result?.data && result?.data.length > 0) setAnimeDetails(result?.data)
      } catch(e){
        console.log(e);
        setAnimeDetails([])
      }  
    }

  return (
    <div>
        <form onSubmit={() => {
            handleSubmit(event)
            fetchAnimeByName(formData.name)
        }}>
            <input 
            className="bg-white text-black px-4 py-2 my-6 border rounded-xl"
            type="text" 
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            />
            <button className="px-4 py-2 border rounded-xl" type="submit">Add</button>
        </form>

        <ul className="mx-4 grid gap-8 p-6 grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {
                (animeDetails && animeDetails.length > 0 && submittedData.name === animeDetails.title) ?
                animeDetails.map((data) => 
                <div className="flex flex-col overflow-hidden rounded-2xl border shadow-md bg-white hover:shadow-lg transition-shadow duration-300" key={data.mal_id}>
                    <img src={data.images.jpg.image_url} alt={data.title} className="h-64 w-full object-cover" />
                    <div className="p-4 flex flex-col justify-between flex-grow">
                    <h1 className="text-lg font-bold text-gray-800 truncate">{data.title}</h1>
                    <p className="text-sm text-gray-600 mt-2">Episodes: {data.episodes}</p>
                    </div>
                </div>
                ) : <h1>No animes found</h1>
            }
        </ul>
    


    </div>
  )
}

export default FormAnime