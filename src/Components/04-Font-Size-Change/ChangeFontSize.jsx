import { useContext } from "react"
import { GlobalContext } from "../../Context"

function ChangeFontSize() {
    const {fontSize ,setFontSize, fontWeight ,handleChangeFontWeight} = useContext(GlobalContext)
    function handleIncreaseFont(){
        setFontSize(fontSize + 1)
    }

  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className={`${fontWeight}`} style={{fontSize : `${fontSize * 16}px`}}>Font Size</h1>
        <button className=" px-4 py-2 border rounded-full font-extralight mt-5" onClick={handleIncreaseFont}>Increase Font Size</button>
        <button className=" px-4 py-2 border rounded-full font-extralight mt-5" onClick={handleChangeFontWeight}>Change Font Weight</button>
    </div>
  )
}

export default ChangeFontSize