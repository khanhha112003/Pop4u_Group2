// import { useEffect } from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <nav class="container-fluid">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-2 col-lg-2 col-xl-3">
              <div class="logo">
                <a href="#"><img src="\public\images\pop-4-u.svg" alt="Pop4u Logo"/></a>
              </div>    
            </div>
            <div class="col-md-8 col-lg-8 col-xl-6">
              <div class="nav-list">
                <ul>
                  <li><a href="#home"><span class="label-m">Sản phẩm</span></a></li>
                  <li><a href="#products"><span class="label-m">Nghệ sĩ</span></a></li>
                  <li><a href="#about"><span class="label-m">Pre-order</span></a></li>
                  <li><a href="#contact"><span class="label-m">Về chúng tôi</span></a></li>
                  <li><a href="#blog"><span class="label-m">Blog</span></a></li>
                </ul>  
              </div>    
            </div>
            <div class="col-md-2 col-lg-2 col-xl-3">
              <div class="nav-list-icons">
                <ul>
                  <li><div class="icon"><a href="#"><i><img src="\public\images\quick-reference-all.svg" alt="Tra cứu đơn hàng"/></i></a></div></li>
                  <li><div class="icon"><a href="#"><i><img src="\public\images\local-mall.svg" alt="Giỏ hàng"/></i></a></div></li>
                  <li><div class="icon"><a href="#"><i><img src="\public\images\account-circle.svg" alt="Tài khoản"/></i></a></div></li>
                </ul>           
              </div>    
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
export default Navbar;
  