import { Outlet } from "react-router-dom"
import Footer from './components/Footer/Footer';
import CustomNavbar from './components/Navbar/Navbar';

export function SpecificLayout () {
    return (
        <div className="App">
            <CustomNavbar />
            <Outlet />
            <Footer />
        </div>
    )
}