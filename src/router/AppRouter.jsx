import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import HomeCard from "../components/HomeCard"
import HomeDetails from "../pages/HomeDetails"
import Weapons from "../pages/Weapons"
import WeaponsDetails from "../pages/WeaponsDetails"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="details/:id"  element={<HomeDetails/>}/>
        <Route path="weapons"  element={<Weapons/>}/>
        <Route path="weaponsdetails/:id"  element={<WeaponsDetails/>}/>
    </Routes>

    
    </BrowserRouter>
  )
}

export default AppRouter