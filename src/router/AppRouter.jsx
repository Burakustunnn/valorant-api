import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import HomeCard from "../components/HomeCard"
import HomeDetails from "../pages/HomeDetails"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="details/:id"  element={<HomeDetails/>}/>
    </Routes>

    
    </BrowserRouter>
  )
}

export default AppRouter