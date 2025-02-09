// eslint-disable-next-line react/prop-types
function CommonInput({name,label,type,id,placeholder,value,onChange}) {
  return (
    <div className="flex gap-4">
        <label className="flex items-center text-xl w-20 font-bold" htmlFor={name}>{label}</label>
        <input className="border rounded-lg px-4 py-1" 
        type={type || 'text'} name={name} id={id} placeholder={placeholder || 'Enter Value'}
        value={value} onChange={onChange} />
    </div>
  )
}

export default CommonInput