import { Link, useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/use-fetch"

function SearchedAnime() {
    const navigate = useNavigate()

    const { name } = useParams()
    const {data , loading} = useFetch(`https://api.jikan.moe/v4/anime?q=${decodeURIComponent(name)}`)

    if (loading) return <h1 className="text-center text-4xl mt-10">Loading...</h1>;

  return (
    <>
     <div className="flex flex-col justify-center items-center mt-10">
            <button onClick={()=> navigate(-1)}>Go Back</button>
            <div className="flex flex-col md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    data?.data && data?.data.length > 0 ?
                    data?.data.map((anime) => (
                        <div className="px-3 py-3 shadow rounded-xl flex flex-col items-start" key={anime.mal_id}>
                            <img src={anime.images.jpg.image_url} alt="anime" className="w-full h-[400px] object-cover rounded-md" />
                            <h1 className="text-xl font-semibold mt-2">{anime?.title}</h1>
                            <p className="text-lg font-semibold">Rating: {anime?.score}</p>
                            <div className="px-3 py-1 border mt-3 rounded-xl hover:bg-gray-200 transition">
                               <Link to={`/ANMi/ANMi-home-page/anime-details/${anime.mal_id}`}>Details</Link>
                            </div>
                        </div>
                    ))
                    : null
                }
            </div>
        </div>    
    </>
  )
}

export default SearchedAnime