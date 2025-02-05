import { useState } from "react";
import Button from "../ButtonComponent/Button";
import AnimeDetails from "./AnimeDetails";

// eslint-disable-next-line react/prop-types
function AnimeList({ id, title, image, isOpen, fetchAnimeDetails, animeDetails, animeEpisodes, animeDuration }) {
  return (
    <div className="border min-w-[300px] min-h-[400px] rounded-xl px-4 py-2 flex flex-col justify-between text-start">
      <img src={image} className="w-full h-[300px] rounded-xl" />
      <h1 className="text-xl font-bold my-2 max-w-[250px]">{title}</h1>

      {isOpen && animeDetails ? (
        <div>
          <AnimeDetails episodes={animeEpisodes} duration={animeDuration} />
        </div>
      ) : (
        <Button
          buttonDescription="View More"
          onClick={() => fetchAnimeDetails(id)}
        />
      )}
    </div>
  );
}

export default AnimeList;
