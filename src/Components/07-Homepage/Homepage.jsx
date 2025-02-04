import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function Homepage() {
    const [toggleHidden,setToggleHidden] = useState(true)

    function handleToggle(){
        setToggleHidden(!toggleHidden)
    }

  return (
    <>
      {
        toggleHidden ? 
        <div>
            <div className={`p-8 flex justify-between items-center text-3xl`}>
                <h1>LOGO</h1>
                <button className=" md:hidden">
                <FontAwesomeIcon onClick={handleToggle} icon={faBars} />
                </button>
                
                <div className="px-8 mt-5 hidden md:flex justify-between gap-4 items-start">
                    <a className="text-3xl py-2 px-2 hover:font-bold " href="#">Home</a>
                    <a className="text-3xl py-2 px-2 hover:font-bold " href="#">Contact Us</a>
                    <a className="text-3xl py-2 px-2 hover:font-bold " href="#">About Us</a>
                </div>

            </div> 
            <div className="mt-8 flex justify-center items-center">
                <h1 className="text-5xl">This is React Practice</h1>
            </div>
        </div>
        :
        <div className="flex flex-col md:hidden">
            <div className="p-8 flex justify-between items-center text-3xl">
                <h1></h1>
                <FontAwesomeIcon  onClick={handleToggle} icon={faX} />
            </div>
            <div className="flex flex-col justify-between gap-52">
                <div className="px-8 mt-5 flex flex-col justify-between gap-4 items-start">
                    <a className="text-3xl border-y border-gray-100 w-full py-8 px-8 hover:font-bold hover:bg-slate-50 rounded-3xl hover:border-gray-200" href="#">Home</a>
                    <a className="text-3xl border-y border-gray-100 w-full py-8 px-8 hover:font-bold hover:bg-slate-50 rounded-3xl hover:border-gray-200" href="#">Contact Us</a>
                    <a className="text-3xl border-y border-gray-100 w-full py-8 px-8 hover:font-bold hover:bg-slate-50 rounded-3xl hover:border-gray-200" href="#">About Us</a>
                </div>
                <div className="flex flex-col justify-between items-center gap-2">
                    <button className="w-[400px] py-2 rounded-lg border text-3xl hover:font-bold hover:bg-slate-50">Sign In</button>
                    <button className="w-[400px] py-2 rounded-lg border text-3xl hover:font-bold hover:bg-slate-50">Sign Up</button>
                </div>
            </div>
        </div>
      }
    </>
  )
}

export default Homepage