import { useCounter } from "@uidotdev/usehooks"

function CustomCounter() {
    const [count , {increment,decrement,set,reset}] = useCounter(2,{
        min: 2,
        max: 20
    })

  return (    
    <div className="flex w-full justify-center items-center p-28">
        <div className="flex flex-col gap-4 justify-center items-center px-4 py-2 shadow shadow-gray-300">
            <h1 className="text-8xl font-bold">{count}</h1>
            <button className="text-4xl font-bold border border-gray-300 px-2 py-2" onClick={increment}>Increment</button>
            <button className="text-4xl font-bold border border-gray-300 px-2 py-2" onClick={decrement}>Decrement</button>
            <button className="text-4xl font-bold border border-gray-300 px-2 py-2" onClick={()=> set(10)}>Set</button>
            <button className="text-4xl font-bold border border-gray-300 px-2 py-2" onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default CustomCounter