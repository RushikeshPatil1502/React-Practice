import React, { useEffect, useState } from 'react'

function Counter() {
    let [counter, setCounter] = useState(0)
    let [bgColor,setBgColor] = useState('bg-black')

    useEffect(()=>{
         if(counter < 0) setCounter(0)
        
         if(counter > 10) setBgColor('bg-green-300')
         if(counter > 20) setBgColor('bg-blue-300')
         if(counter > 30) setBgColor('bg-red-300')
    },[counter]) 

    function handleClickIncrease(){
        setCounter(counter+1)
    }
    function handleClickDecrease(){
        setCounter(counter-1)
    }

  return (
    <div className={`flex flex-col gap-8 ${bgColor} text-white h-screen justify-center items-center`}>
       <h1 className='text-5xl font-bold px-4 py-4 border'>{counter}</h1>
       <div className=' w-[200px] flex justify-between items-center text-center'>
         <button onClick={handleClickIncrease} className='px-6 py-4 border rounded-full text-3xl font-bold'>+</button>
         <button onClick={handleClickDecrease} className='px-6 py-4 border rounded-full text-3xl font-bold'>-</button>
       </div>
    </div>
  )
}

export default Counter