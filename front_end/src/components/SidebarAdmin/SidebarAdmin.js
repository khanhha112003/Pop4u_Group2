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
    <div className="sidebar col-md-3 col-lg-2">
    
    <ul className="nav flex-column sticky-top pl-0 pt-2 p-2 mt-3 ">
        
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