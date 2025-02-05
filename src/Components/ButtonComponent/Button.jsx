
// eslint-disable-next-line react/prop-types
function Button({onClick , buttonDescription}) {
  return (
    <button className="px-6 py-2 border rounded-full" onClick={onClick}>{buttonDescription}</button>
  )
}

export default Button