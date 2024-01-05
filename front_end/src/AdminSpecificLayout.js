import { Outlet } from "react-router-dom"
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin';
import SidebarAdmin from "./components/SidebarAdmin/SidebarAdmin";

export function AdminSpecificLayout () {
    return (
        <div className="App">
            <HeaderAdmin />
            <SidebarAdmin />
            <Outlet />
            
        </div>
    )
}