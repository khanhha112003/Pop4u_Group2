import React from "react";
import { NavLink } from "react-router-dom";
import './SidebarAdmin.css';
import Container from 'react-bootstrap/Container';

const SidebarAdmin = () => {
  return (
    <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: 'var(--bs-body-bg)' }}>
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>Tên nhân viên</h5></a></li>
        <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to="/dashboard"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Dashboard</span></NavLink></li>
        <li className="nav-item mb-2">
          <NavLink className="nav-link text-secondary" to="#submenu1" data-toggle="collapse" data-target="#submenu1">
            <i className="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports</span>
          </NavLink>
          <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
            <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to=""><i className="fas fa-book-reader"></i> Data Report </NavLink></li>
            <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to=""> <i className="fas fa-book-medical"></i> File Report </NavLink></li>
          </ul>
        </li>
        <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Order</span></NavLink></li>
        <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">Blog</span></NavLink></li>
        <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Voucher</span></NavLink></li>
        <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Customer</span></NavLink></li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;