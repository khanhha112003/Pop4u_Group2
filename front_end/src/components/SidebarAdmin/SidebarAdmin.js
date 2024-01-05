import React from "react";
import { NavLink } from "react-router-dom";
import './SidebarAdmin.css';


const SidebarAdmin = () => {
  return (
    // <nav className="sidebar ">
    //   <ul>
    //     <li>
    //       <NavLink to="/products">
    //         <i className="fas fa-shopping-basket"></i>
    //         <span>Sản phẩm</span>
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/orders">
    //         <i className="fas fa-clipboard-list"></i>
    //         <span>Đơn hàng</span>
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/customers">
    //         <i className="fas fa-users"></i>
    //         <span>Khách hàng</span>
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
    <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Tên nhân viên</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Dashboard</span></a></li>
                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Order</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Blog</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Voucher</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Customer</span></a></li>
            </ul>
       </div>
  );
};

export default SidebarAdmin;
