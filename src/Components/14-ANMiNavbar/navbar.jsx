import { Link } from "react-router-dom"

function ANMiNavbar() {
  return (
    <div className="flex p-4 justify-between items-center text-center bg-purple-300">
        <div className="flex gap-4 justify-between items-center text-center w-full md:w-fit ">
            <h1 className="text-xl font-bold">ANMi</h1>
            <Link className="text-lg font-semibold" to={'ANMi-home-page'}>Home</Link>
            <Link className="text-lg font-semibold" to={'ANMi-top-anime'}>Top Anime</Link>
        </div>
        {/* <div> */}
          <input className="px-3 border rounded-xl md:flex hidden border-black text-gray-800" type="text" placeholder="search"/>
        {/* </div> */}
    </div>
  )
}

export default ANMiNavbar