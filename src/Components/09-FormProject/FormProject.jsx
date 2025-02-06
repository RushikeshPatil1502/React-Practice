import { useState } from "react"

function FormProject() {
    const [formData ,setFormData] = useState({
        name: '',
        age: ''
    })
    const [submittedData , setSubmittedData] = useState([])

    function handleChange(event){
       const {name , value} = event.target

       setFormData({
        ...formData, 
        [name] : value
       })
    }

    function handleSubmit(event){
        event.preventDefault()

        if (!formData.name.trim() || !formData.age.trim() || isNaN(formData.age)) {
            alert("Please provide valid name and age.");
            return;
        }

        setSubmittedData([...submittedData , {
            name: formData.name,
            age: formData.age
        }])

        setFormData(
            {
                name: '',
                age: ''
            }
        )
    }
  return (
    <>
       <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <input className="bg-white text-black px-4 py-2 my-6 border rounded-xl"
                   type="text"
                   name="name"
                   placeholder="Enter Your name"
                   value={formData.name}
                   onChange={handleChange} />
            
            <input className="bg-white text-black px-4 py-2 my-6 border rounded-xl"
                   type="text"
                   name="age"
                   placeholder="Enter Your age"
                   value={formData.age}
                   onChange={handleChange} />
            <button className="px-4 py-2 border rounded-xl" type="submit">Add</button>
        </form>

        <ul className="grid grid-cols-2 bg-purple-100 gap-4 text-2xl mt-3 px-4 py-1 rounded-xl">
            {
                submittedData.map((data , index)=> <div key={index}>
                    <li>{data.name}</li>
                    <li>{data.age}</li>
                </div>)
            }
        </ul>
       </div>
    </>
  )
}

export default FormProject