import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function ANMiNavbar() {
  const [searchTerm , setSearchTerm] = useState('')
  const [animeName , setAnimeName] = useState(null)
  const navigate = useNavigate()

  function handleOnclick(event){
    event.preventDefault();
    setAnimeName(searchTerm); 
    navigate(`/ANMi/searched-anime/${encodeURIComponent(searchTerm)}`);

    setSearchTerm('');
}



  return (
    <div className="flex flex-col gap-4 md:flex-row p-4 justify-between items-center text-center bg-purple-300">
        <div className="flex gap-4 justify-between items-center text-center w-full md:w-fit ">
            <h1 className="text-xl font-bold">ANMi</h1>
            <Link className="text-lg font-semibold" to={'ANMi-home-page'}>Home</Link>
            <Link className="text-lg font-semibold" to={'ANMi-top-anime'}>Top Anime</Link>
        </div>
        {/* <div> */}
        <div className="flex justify-between items-center gap-2">
          <form className="flex justify-between items-center gap-2" 
          onSubmit={(event)=> handleOnclick(event)}>
            <input 
            className="px-3 border rounded-xl border-black text-gray-800" 
            type="text" 
            placeholder="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            />
            <FontAwesomeIcon type="submit" className="p-1 rounded-full border" icon={faMagnifyingGlass} />
          </form>
        </div>
        {/* </div> */}
    </div>
  )
}

export default ANMiNavbar