import { Outlet } from "react-router-dom";
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin';
import SidebarAdmin from "./components/SidebarAdmin/SidebarAdmin";
import './AdminSpecificLayout.css'
export function AdminSpecificLayout() {
  return (
    <div className="App">
      <HeaderAdmin />
      <div className="container-admin">
        <SidebarAdmin />
        <Outlet />
      </div>
    </div>

  );
}
