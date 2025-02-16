import {  useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/use-fetch"

function ANMiDetails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const {data: animeDetails , loading} = useFetch(`https://api.jikan.moe/v4/anime/${id}`)

    if (loading) return <h1 className="text-center text-4xl mt-10">Loading...</h1>;


  return (
    <div className="p-4 flex flex-col">
        <button onClick={()=> navigate(-1)}>Go Back</button>

        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-3xl font-bold">{animeDetails?.data?.title}</h1>
            <img src={animeDetails?.data?.images?.jpg?.large_image_url} alt={animeDetails?.data?.title} className="w-full rounded-lg mt-4"/>
            <p className="mt-4 text-lg">{animeDetails?.data?.synopsis}</p>
            <p className="mt-2 text-md font-semibold">Rating: {animeDetails?.data?.score}</p>
        </div>
    </div>
  )
}

export default ANMiDetails