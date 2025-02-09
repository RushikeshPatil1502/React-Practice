import { useState } from "react"
import CommonForm from "./CommonForm"
import { RegisterFormContent } from "../../../config"

function RegisterForm() {
    const initialFormData = {
        name: '',
        email: ''
    }

    const [RegFormData,setRegFormData] = useState(initialFormData)
    const [submittedRegFormData , setSubmittedRegFormData] = useState(initialFormData)

    function handleSubmit(event){
           event.preventDefault()

           console.log(RegFormData);

           setSubmittedRegFormData({
            ...RegFormData,
            RegFormData
           })

           setRegFormData(initialFormData)
    }


  return (
   <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Register Form</h1>
        <div className="p-5 bg-red-100 border rounded-xl w-fit">
                <CommonForm 
                formData = {RegFormData}
                setFormData = {setRegFormData}
                formControls = {RegisterFormContent}
                onHandleSubmit={handleSubmit}
                />

                <div className="text-xl mt-4 font-bold">
                        <div>{submittedRegFormData.name}</div>
                        <div>{submittedRegFormData.email}</div>
                </div>
        </div>       
   </div> 
    
  )
}

export default RegisterForm