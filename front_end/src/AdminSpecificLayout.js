import { Outlet } from "react-router-dom"
import HeaderAdmin from './components/HeaderAdmin/HeaderAdmin';

export function AdminSpecificLayout () {
    return (
        <div className="App">
            <HeaderAdmin />
            <Outlet />
            
        </div>
    )
}