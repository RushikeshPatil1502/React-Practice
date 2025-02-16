import { Link } from "react-router-dom";
import useFetch from "../hooks/use-fetch"

function ANMiTopAnimeList() {

    const {data , loading } = useFetch("https://api.jikan.moe/v4/anime")

    if (loading) return (
        <div className="flex justify-center items-center mt-10">
            <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
    );
   
  return (
    <div className="flex flex-col justify-center items-center mt-10">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            data?.data && data?.data.length > 0 ?
            data?.data.filter(topAnime=> topAnime?.score > 8).map(topAnime=>
                <div className="px-3 py-3 shadow rounded-xl flex flex-col items-start" key={topAnime?.mal_id}>
                            <img src={topAnime?.images.jpg.image_url} alt="anime" className="w-full h-[400px] object-cover rounded-md" />
                            <h1 className="text-xl font-semibold mt-2">{topAnime?.title}</h1>
                            <p className="text-lg font-semibold">Rating: {topAnime?.score}</p>
                            <div className="px-3 py-1 border mt-3 rounded-xl hover:bg-gray-200 transition">
                               <Link to={`/ANMi/ANMi-home-page/anime-details/${topAnime.mal_id}`}>Details</Link>
                            </div>

                </div>
            )
            : null
        }
    </div>
    
</div>
  )
}

export default ANMiTopAnimeList