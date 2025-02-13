import { Link, Route, Routes } from "react-router-dom"
import ChangeColor from "./Components/01-ColorChange/ChangeColor"
import Home from "./Components/12-React-Router/Home"
import ApiFetch from "./Components/02-Users-Api-Fetch/ApiFetch"
import Counter from "./Components/03-Counter/Counter"
import ChangeFontSize from "./Components/04-Font-Size-Change/ChangeFontSize"
import StyleChanger from "./Components/06-Style-Changer/StyleChanger"
import Homepage from "./Components/07-Homepage/Homepage"
import AnimeHome from "./Components/08-AnimeProject/Home"
import FormProject from "./Components/09-FormProject/FormProject"
import FormAnime from "./Components/10-Form-Anime/FormAnime"
import RegisterForm from "./Components/11-Dynamic-Form/RegisterForm"
import LoginForm from "./Components/11-Dynamic-Form/LoginForm"
import ApiuseFetch from "./Components/13-Custom-hook/apiuseFetch"
import CustomCounter from "./Components/13-Custom-hook/CustomCounter"

function App() {

  return (
    <>    
     <div>
     <div className="flex justify-between text-xl font-semibold py-10 bg-black text-white px-6">
            <Link to={'/'}>Home</Link>
            <Link to={'/change-color'}>ChangeColor</Link>
            <Link to={'/api-fetch'}>Fetch API</Link>
            <Link to={'/counter'}>Counter</Link>
            <Link to={'/change-font-size'}>FontSize Project</Link>
            <Link to={'/styles-changer'}>StylesChanger</Link>
            <Link to={'/home-page'}>Responsive HomePage</Link>
            <Link to={'/Anime-page'}>Anime Page</Link>
            <Link to={'/form'}>Form Project</Link>
            <Link to={'/anime-search'}>AnyAnime</Link>
            <Link to={'/common-form'}>CommonForm</Link>
            <Link to={'/api-use-fetch'}>ApiUseFetch</Link>
            <Link to={'/custom-hook-counter'}>customHookCounter</Link>
        </div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/change-color" element={<ChangeColor />} />
          <Route path="/api-fetch" element={<ApiFetch />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/change-font-size" element={<ChangeFontSize />} />
          <Route path="/styles-changer" element={<StyleChanger />} />
          <Route path="/home-page" element={<Homepage />} />
          <Route path="/Anime-page" element={<AnimeHome />} />
          <Route path="/form" element={
            <div className="p-5 flex w-full justify-center items-center gap-4">
              <FormProject />
            </div>
          } />
          <Route path="/anime-search" element={<FormAnime />} />
          <Route path="/common-form" element={
            <div className="p-5 flex gap-4">
                <RegisterForm />
                <LoginForm />
            </div>
          } />
          <Route path="/api-use-fetch" element={<ApiuseFetch />} />
          <Route path="/custom-hook-counter" element={<CustomCounter />} />
        </Routes>

        
        
     </div>
    </>
  )
}

export default App
