import { Outlet } from "react-router-dom"
import ANMiNavbar from "./navbar"

function Layout() {
  return (
    <div>
        <ANMiNavbar />
        <Outlet />
    </div>
  )
}

export default Layout