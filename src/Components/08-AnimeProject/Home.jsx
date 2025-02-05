import { useEffect, useState } from "react";
import AnimeList from "./AnimeList";

function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [selectedAnimeId, setSelectedAnimeId] = useState(null); // Track which anime is selected
  const [animeDetails, setAnimeDetails] = useState({});

  async function fetchAllAnimes() {
    try {
      setLoadingState(true);
      const apiResponse = await fetch("https://api.jikan.moe/v4/anime");
      const result = await apiResponse.json();

      if (result?.data && result?.data.length > 0) {
        setAnimeList(result?.data);
        setLoadingState(false);
      } else {
        setAnimeList([]);
        setLoadingState(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchAnimeDetails(getAnimeId) {
    try {
      const apiResponse = await fetch(`https://api.jikan.moe/v4/anime/${getAnimeId}`);
      const result = await apiResponse.json();
      if (result?.data) {
        setAnimeDetails((prevDetails) => ({
          ...prevDetails,
          [getAnimeId]: result?.data,
        }));
        setSelectedAnimeId(getAnimeId); // Set the currently selected anime
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAllAnimes();
  }, []);

  if(loadingState) return <div className="flex justify-center items-center">
       <h1 className="text-3xl font-bold">Wait a moment...</h1>
  </div>

  return (
    <div className="p-6 flex flex-wrap justify-center items-center gap-4">
      {animeList &&
        animeList.length > 0 &&
        animeList.map((anime) => (
          <AnimeList
            key={anime.mal_id}
            id={anime.mal_id}
            title={anime.title}
            image={anime.images.jpg.image_url}
            isOpen={selectedAnimeId === anime.mal_id} // Check if this card is open
            fetchAnimeDetails={fetchAnimeDetails}
            animeDetails={animeDetails[anime.mal_id]}

            animeEpisodes={anime.episodes}
            animeDuration={anime.duration}
          />
        ))}
    </div>
  );
}

export default Home;
