import { useState } from "react"
import CommonForm from "./CommonForm"
import { LoginFormContent } from "../../../config"

function LoginForm() {
    const initialFormData = {
        name: '',
        email: ''
    }

    const [LogFormData,setLogFormData] = useState(initialFormData)
    const [submittedLogFormData , setSubmittedLogFormData] = useState(initialFormData)

    function handleSubmit(event){
           event.preventDefault()

           console.log(LogFormData);

           setSubmittedLogFormData({
            ...LogFormData,
            LogFormData
           })

           setLogFormData(initialFormData)
    }


  return (
   <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Login Form</h1>
        <div className="p-5 bg-red-100 border rounded-xl w-fit">
                <CommonForm 
                formData = {LogFormData}
                setFormData = {setLogFormData}
                formControls = {LoginFormContent}
                onHandleSubmit={handleSubmit}
                />

                <div className="text-xl mt-4 font-bold">
                        <div>{submittedLogFormData.name}</div>
                        <div>{submittedLogFormData.email}</div>
                </div>
        </div>

        
   </div> 
    
  )
}

export default LoginForm