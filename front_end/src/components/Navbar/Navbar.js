// import { useEffect } from 'react'
import { ReactComponent as LogoIcon } from './icons/logo.svg';
import { ReactComponent as CartIcon } from './icons/icon_cart.svg';
import { ReactComponent as AccountIcon } from './icons/icon_account.svg';
import { ReactComponent as SearchIcon } from './icons/icon_search.svg';
import { Link } from 'react-router-dom';
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
              <a href="#"><LogoIcon /></a>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-xl-6">
            <div className="nav-list">
              <ul>
                <li><Link to="/">  <span className="label-m"> Trang chủ</span></Link></li>
                <li><Link to="/products"> <span className="label-m">Sản phẩm</span></Link></li>
                <li><Link to="/artists"> <span className="label-m">Nghệ sĩ</span></Link></li>
                <li><Link to="/preorder" > <span className="label-m">Pre-order</span></Link></li>
                <li><Link to="/about"> <span className="label-m">Về chúng tôi</span></Link></li>
                <li><Link to="/blog"> <span className="label-m">Blog</span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-3">
            <div className="nav-list-icons">
              <ul>
                <li><div className="icon"><a href="#"><i>
                  <SearchIcon />
                </i></a></div></li>
                <li><div className="icon"><a href="#"><i>
                  <CartIcon />
                </i></a></div></li>
                <li><div className="icon"><a href="#"><i>
                  <AccountIcon />
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
