// eslint-disable-next-line react/prop-types
function AnimeDetails({episodes , duration}) {
  return (
    <div className="flex flex-col text-xl mt-2 font-semibold">
        <p>Episodes: {episodes}</p>
        <p>Duration: {duration}</p>
    </div>
  )
}

export default AnimeDetails