import { useReducer } from "react"

const CHANGE_STYLES = 'CHANGE_STYLES'

const initialState = {
    stylesFlag : true
}

function reducer(state , action){
    switch (action.type) {
        case CHANGE_STYLES:
            
            return {
                ...state,
                stylesFlag : !state.stylesFlag            
            }
    
        default:
            return state
    }
}

function StyleChanger() {
   const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="flex flex-col justify-center items-center gap-4">
       {
        state.stylesFlag ? <h1 className="px-8 py-12 bg-purple-300 font-semibold text-3xl">useReducer Styles Change</h1> :
                           <h1 className="px-8 py-12 rounded-full border font-bold text-4xl text-white bg-gray-600">useReducer Styles Change</h1>
       }
       <button className="px-4 py-2 rounded-full border" onClick={() => dispatch({type: CHANGE_STYLES})}>Change Styles</button>
    </div>
  )
}

export default StyleChanger