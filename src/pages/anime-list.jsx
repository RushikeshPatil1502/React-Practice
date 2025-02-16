import { useState } from "react";
import useFetch from "../hooks/use-fetch";
import { Link } from "react-router-dom";

function ANMiAnimeList() {
    const { data, loading } = useFetch("https://api.jikan.moe/v4/anime");
    const [animeListCount, setAnimeListCount] = useState(5);
    const [selectedAnimeId , setSelectedAnimeId] = useState(null)

    // eslint-disable-next-line no-unused-vars
    const {data: animeDetails , loading: animeDetailsLoading} = useFetch(
        selectedAnimeId ? `https://api.jikan.moe/v4/anime/${selectedAnimeId}` : null
    )
    
    function handleGetAnimeId(getAnimeId){
        setSelectedAnimeId(getAnimeId)
    }

    // console.log(animeDetails);

    if (loading) return (
        <div className="flex justify-center items-center mt-10">
            <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
    );

    function handleIncreaseAnimeList() {
        setAnimeListCount(animeListCount + 10);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <div className="flex flex-col md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    data?.data && data?.data.length > 0 ?
                    data?.data.slice(0, animeListCount).map((anime) => (
                        <div className="px-3 py-3 shadow rounded-xl flex flex-col items-start" key={anime.mal_id}>
                            <img src={anime.images.jpg.image_url} alt="anime" className="w-full h-[400px] object-cover rounded-md" />
                            <h1 className="text-xl font-semibold mt-2">{anime?.title}</h1>
                            <p className="text-lg font-semibold">Rating: {anime?.score}</p>

                            <div onClick={() => {handleGetAnimeId(anime?.mal_id)}} className="px-3 py-1 border mt-3 rounded-xl hover:bg-gray-200 transition">
                               <Link to={`anime-details/${anime.mal_id}`}>Details</Link>
                            </div>
                            
                        </div>
                    ))
                    : null
                }
            </div>
            <button onClick={handleIncreaseAnimeList} className="px-4 py-2 border mt-5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
                Show More
            </button>
        </div>
    );
}

export default ANMiAnimeList;
