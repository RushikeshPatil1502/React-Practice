// eslint-disable-next-line react/prop-types
function UsersCard({name,image,age,university}) {
  return (
    <div className="px-5 py-2 w-[300px] h-[300px] border gap-2 flex flex-col justify-center items-center text-center">
         <img className="border w-[100px]" src={image} alt="image" />
         <h1 className="text-xl font-bold">{name}</h1>
         <p>Age: {age}</p>
         <p className="max-w-[300px]">{university}</p>
    </div>
  )
}

export default UsersCard