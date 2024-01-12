import React from "react";
import { NavLink } from "react-router-dom";
import './SidebarAdmin.css';
// import { ReactComponent as DashboardIcon } from './icons/icon_dashboard.svg'
import { ReactComponent as ProductIcon } from './icons/icon_product.svg'
import { ReactComponent as OrderIcon } from './icons/icon_order.svg'
import { ReactComponent as VoucherIcon } from './icons/icon_voucher.svg'
import { ReactComponent as ArtistIcon } from './icons/icon_artist.svg'
import { ReactComponent as CustomerIcon } from './icons/icon_customer.svg'


const SidebarAdmin = () => {
  return (
    // <div className="sidebar col-md-3 col-lg-2 sidebar-offcanvas pl-0" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
    //   <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
    //     <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><h5>Tên nhân viên</h5></a></li>
    //     <li className="nav-item mb-2 "><NavLink className="nav-link text-secondary" to="/dashboard"><i className="fas fa-user font-weight-bold"></i> 
    //     <DashboardIcon/>
    //     <span className="ml-3">Dashboard</span></NavLink></li>
    //     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Product</span></NavLink></li>
    //     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Order</span></NavLink></li>
    //     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">Blog</span></NavLink></li>
    //     <li className="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Voucher</span></NavLink></li>
    //     <li classNa me="nav-item mb-2"><NavLink className="nav-link text-secondary" to="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Customer</span></NavLink></li>
    //   </ul>
    // </div>
    <div className="sidebar col-md-3 col-lg-2"  style={{ backgroundColor: 'var(--color-surface-container-highest-light)'}}>
    
    <ul className="nav flex-column sticky-top pl-0 pt-2 p-2 mt-3 ">
      {/* <li className="nav-item mb-2 my-1"><a className="nav-link text-secondary" href="#"><h5>Tên nhân viên</h5></a></li>
        
        <li className="nav-item admin-nav-item mb-2 "><NavLink className="nav-link admin-navlink" to="/admin/dashboard"><i className=""></i> 
        <DashboardIcon />
        <span className="ml-3 fs-5">Dashboard</span></NavLink></li> */}
        
        <li className="nav-item admin-nav-item mb-2 "><NavLink className="nav-link admin-navlink" to="/admin/product_list"><i className="fs-5"></i> 
        <ProductIcon/>
        <span className="ml-3 fs-5">Product</span></NavLink></li>
       
        <li className="nav-item admin-nav-item mb-2 "><NavLink className="nav-link admin-navlink" to="/admin/order_list"><i className="fs-5"></i> 
        <OrderIcon/>
        <span className="ml-3 fs-5">Order</span></NavLink></li>
      
        <li className="nav-item admin-nav-item mb-2 "><NavLink className="nav-link admin-navlink" to="/admin/artist_list"><i className="fs-5"></i> 
        <ArtistIcon/>
        <span className="ml-3 fs-5">Artist</span></NavLink></li>
      
        <li className="nav-item admin-nav-item mb-2 "><NavLink className="nav-link admin-navlink" to="/admin/voucher_list"><i className="fs-5"></i> 
        <VoucherIcon/>
        <span className="ml-3 fs-5">Voucher</span></NavLink></li>
      
        <li className="nav-item admin-nav-item mb-2 "><NavLink className="nav-link admin-navlink" to="/admin/customer_list"><i className="fs-5"></i> 
        <CustomerIcon/>
        <span className="ml-3 fs-5">Customer</span></NavLink></li>
      
      
      
      </ul>
  
  </div>
  );
};


export default SidebarAdmin;