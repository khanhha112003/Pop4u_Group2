// import { useEffect } from 'react'
import { ReactComponent as LogoIcon } from './icons/logo.svg';
import { ReactComponent as CartIcon } from './icons/icon_cart.svg';
import { ReactComponent as AccountIcon } from './icons/icon_account.svg';
import { ReactComponent as SearchIcon } from './icons/icon_search.svg';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
    return (
        <nav className="container-fluid">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-2 col-lg-2 col-xl-3">
              <div className="logo">
                {/* <a href="#"><img {src :Logo} alt="Pop4u Logo"/></a> */}
                <a href="#"><LogoIcon/></a>
              </div>    
            </div>
            <div className="col-md-8 col-lg-8 col-xl-6">
              <div className="nav-list">
                <ul>
                  <li><a href="#home"><span className="label-m">Sản phẩm</span></a></li>
                  <li><a href="#products"><span className="label-m">Nghệ sĩ</span></a></li>
                  <li><a href="#about"><span className="label-m">Pre-order</span></a></li>
                  <li><a href="#contact"><span className="label-m">Về chúng tôi</span></a></li>
                  <li><a href="#blog"><span className="label-m">Blog</span></a></li>
                </ul>  
              </div>    
            </div>
            <div className="col-md-2 col-lg-2 col-xl-3">
              <div className="nav-list-icons">
                <ul>
                  <li><div className="icon"><a href="#"><i>
                    <SearchIcon/>
                  </i></a></div></li>
                  <li><div className="icon"><a href="#"><i>
                    <CartIcon/>
                  </i></a></div></li>
                  <li><div className="icon"><a href="#"><i>
                    <AccountIcon/>
                  </i></a></div></li>
                </ul>           
              </div>    
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
export default Navbar;
  