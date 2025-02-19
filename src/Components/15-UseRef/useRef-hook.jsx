import { useRef } from "react"

function UseRefHook() {
    const divElRef = useRef()

    

    function handleClick(){
        const getDivElRef = divElRef.current
        getDivElRef.style.color = "Red"
    }


  return (
    <div className="h-screen flex flex-col justify-center items-center w-full">
        <div className="text-4xl font-bold" ref={divElRef}>useRef-hook</div>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default UseRefHook