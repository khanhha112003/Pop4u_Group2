import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="App">
        <CustomNavbar/>
        <Outlet />
        <Footer />
    </div>
  )
};