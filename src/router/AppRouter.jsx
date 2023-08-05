import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import HomeDetails from "../pages/HomeDetails";
import Weapons from "../pages/Weapons";
import WeaponsDetails from "../pages/WeaponsDetails";
import Maps from "../pages/Maps";
import Error from "../pages/Error";
import Footer from "../components/Footer";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<HomeDetails />} />
        <Route path="weapons" element={<Weapons />} />
        <Route path="weaponsdetails/:id" element={<WeaponsDetails />} />
        <Route path="maps" element={<Maps />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
