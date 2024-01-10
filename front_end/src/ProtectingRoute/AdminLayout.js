import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import './AdminLayout.css';
import SidebarAdmin from "../components/SidebarAdmin/SidebarAdmin";
import HeaderAdmin from "../components/HeaderAdmin/HeaderAdmin";
export const AdminLayout = () => {
  const { user } = useAuth();
  console.log("---from admin layout---");
  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className="App">
      <HeaderAdmin />
      <div className="container-admin">
        <SidebarAdmin />
        <Outlet />
      </div>
    </div>
  )
};