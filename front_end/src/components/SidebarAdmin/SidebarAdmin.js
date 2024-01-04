import React from "react";
import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/products">
            <i className="fas fa-shopping-basket"></i>
            <span>Sản phẩm</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <i className="fas fa-clipboard-list"></i>
            <span>Đơn hàng</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers">
            <i className="fas fa-users"></i>
            <span>Khách hàng</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarAdmin;
