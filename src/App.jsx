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
import ANMiHomePage from "./pages/home-page"
import ANMiTopAnimeList from "./pages/top-anime-list"
import Layout from "./Components/14-ANMiNavbar/Layout"
import ANMiDetails from "./pages/anime-details"
import SearchedAnime from "./pages/searched-anime"
import UseRefHook from "./Components/15-UseRef/useRef-hook"
import FetchApiReactQuery from "./Components/16-React-query/react-query"

function App() {

  return (
    <>    
     <div>
     <div className="flex justify-between items-center gap-4 flex-wrap text-xl font-semibold py-10 bg-black text-white px-6">
            <Link className="px-3 py-1 border rounded-xl" to={'/'}>Home</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/change-color'}>ChangeColor</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/api-fetch'}>Fetch API</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/counter'}>Counter</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/change-font-size'}>FontSize Project</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/styles-changer'}>StylesChanger</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/home-page'}>Responsive HomePage</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/Anime-page'}>Anime Page</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/form'}>Form Project</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/anime-search'}>AnyAnime</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/common-form'}>CommonForm</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/api-use-fetch'}>ApiUseFetch</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/custom-hook-counter'}>customHookCounter</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/ANMi/ANMi-home-page'}>ANMi</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/use-ref'}>UseRefHook</Link>
            <Link className="px-3 py-1 border rounded-xl" to={'/react-query-recipes'}>Tanstack Query</Link>
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
          <Route path="/ANMi" element={<Layout />}>
             <Route path="ANMi-home-page" element={<ANMiHomePage />} />
             <Route path="ANMi-top-anime" element={<ANMiTopAnimeList />} />
             <Route path="ANMi-home-page/anime-details/:id" element={<ANMiDetails />} />
             <Route path="searched-anime/:name" element={<SearchedAnime />} />
          </Route>

          <Route path="/use-ref" element={<UseRefHook />} />  
          <Route path="/react-query-recipes" element={<FetchApiReactQuery />} />  
        </Routes>       
     </div>
    </>
  )
}

export default App
