import { useEffect, useState } from "react"
import UsersCard from "./usersCard"

function ApiFetch() {
    const [userList , setUserList] = useState([])

    async function fetchUsers(){
        try{
            const ApiResponse = await fetch('https://dummyjson.com/users')
            const data = await ApiResponse.json()
            
            if(data.users) setUserList(data.users)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
       fetchUsers()
    },[])

  return (
    <>
      <div className="px-6 py-10 flex flex-wrap gap-4 h-screen justify-center items-center">
        {
            userList.map(users => 
                <UsersCard key={users.id} name={users.firstName} image={users.image} age={users.age} university={users.university}/>
            )
        }
      </div>
    </>
  )
}

export default ApiFetch