import { useEffect, useState } from "react"

function ChangeColor() {
    const [color , setColor] = useState('')
    const [colorName , setColorName] = useState('')

    function handleColorChange(newColor , newColorName){
        setColor(newColor)
        setColorName(newColorName)
    }

    useEffect(() => {
       setColor('bg-black')
       setColorName('Black')
    },[])

  return (
    <>
      <div className={`h-screen ${color}`}>
          <div className="flex justify-around px-4 py-2 rounded-4xl text-white text-4xl font-bold absolute bottom-4 left-32 right-32 ">
              <button onClick={() => handleColorChange('bg-red-500' , 'Red')} className="px-20 py-20 rounded-full bg-red-500 border"></button>
              <button onClick={() => handleColorChange('bg-blue-500' , 'Blue')} className="px-20 py-20 rounded-full bg-blue-500 border "></button>
              <button onClick={() => handleColorChange('bg-violet-500' , 'Violet')} className="px-20 py-20 rounded-full bg-violet-500 border"></button>
              <button onClick={() => handleColorChange('bg-green-500' , 'Green')} className="px-20 py-20 rounded-full bg-green-500 border"></button>
              <button onClick={() => handleColorChange('bg-cyan-500' , 'Cyan')} className="px-20 py-20 rounded-full bg-cyan-500 border"></button>
          </div>

          <div className="flex justify-center items-center text-white h-screen">
              <h1 className="text-8xl font-bold">{colorName}</h1>  
          </div>
      </div>
    </>
  )
}

export default ChangeColor