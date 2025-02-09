import CommonInput from "./CommonInput/CommonInput";

// eslint-disable-next-line react/prop-types
function CommonForm({formData , formControls = [] , setFormData , onHandleSubmit}) {

    const formType = {
        INPUT: 'input',
        SELECT: 'select'
    }

    function renderElement(getElementItem){
        let content = null

        switch (getElementItem?.contentType) {
            case formType.INPUT:
                content =
                <CommonInput 
                type={getElementItem?.type}
                name={getElementItem?.name}
                id={getElementItem?.id}
                placeholder={getElementItem?.placeholder}
                value={formData[getElementItem?.name]}
                onChange={(event) => {
                    setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })
                }}
                />
                break;
        
            default:
                content =
                <CommonInput 
                label={getElementItem?.label}
                type={getElementItem?.type}
                name={getElementItem?.name}
                id={getElementItem?.id}
                placeholder={getElementItem?.placeholder}
                value={formData[getElementItem?.name]}
                onChange={(event) => {
                    setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })
                }}
                />
                break;
        }
        return content
    }
  return (
    <form onSubmit={onHandleSubmit} className="flex flex-col gap-4">
       {
            formControls.length ? 
                formControls.map((singleElementItem, index) => (
                <div key={singleElementItem.id || index}>
                    {renderElement(singleElementItem)}
                </div>
                ))
            : null
        }

       <button className="px-4 py-2 border rounded-xl" type="submit">Submit</button>
    </form>
  )
}

export default CommonForm