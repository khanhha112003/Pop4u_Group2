import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CustomNavbar from "../components/Navbar/Navbar";

export const NormalLayout = () => {
  console.log("---from normal layout---");
  return (
    <div className="App">
        <CustomNavbar/>
        <Outlet />
        <Footer />
    </div>
  )
};