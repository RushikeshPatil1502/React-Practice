import useFetch from "../../hooks/use-fetch"

function ApiuseFetch() {

    const {data , loading} = useFetch('https://dummyjson.com/products')

    if(loading) return <h1>Loading...</h1>

  return (
    <div className="flex w-full justify-center items-center p-28">
        
        <ul className="flex flex-wrap gap-4 justify-center items-center px-4 py-2 shadow shadow-gray-300">
            {
                data?.products ?
                data?.products?.map((prod)=>
                    <div  key={prod.id}  className="w-[300px] p-4 flex flex-col gap-3 shadow-lg rounded-lg border bg-white hover:shadow-xl transition-shadow duration-300">
                        <img className="w-full h-[180px] object-cover rounded-md" 
                            src={prod?.images} 
                            alt={prod?.title} 
                        />
                        <h2 className="text-lg font-semibold text-gray-800 truncate">{prod?.title}</h2> 
                        <p className="text-sm text-gray-600 line-clamp-2">{prod?.description}</p>
                    </div>

                )
                : null
            }
        </ul>
    </div>
  )
}

export default ApiuseFetch